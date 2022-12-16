import { useState } from "react";
import appConfig from "../../app.config";
import { GoalCard, GoBackLink, Layout } from "../../components";
import { sortGoalsList } from "../../helpers";
import { Goal, LocalStorageData } from "../../models";
import { LocalStorageService } from "../../services";
import GoalsService from "../../services/goals.service";

// --------------------

interface Props {
  list: Goal[];
}

// -----

export default function Goals({ list }: Props) {
  // //   const router = useRouter();
  // //   // If the page is not yet generated, this will be displayed
  // //   // initially until getStaticProps() finishes running
  // //   if (router.isFallback) return <div>Loading...</div>;

  const [goals, setGoals] = useState<Goal[]>(list);
  const [isAddGoalFormDisplayed, setIsAddGoalFormDisplayed] = useState<boolean>(
    list.length === 0
  );

  const title: string = `${
    appConfig.userName ? `${appConfig.userName}'s ` : ""
  }Goals`;

  const onDeleteGoalCallback = (goalId: number) => {
    // const success = (await res).status === 200;
    setGoals((currentGoals) => {
      const newList: Goal[] = sortGoalsList(
        (currentGoals ?? []).filter((goal) => goal.id !== goalId)
      );
      // Save in local storage (offline)
      LocalStorageService.setLocalStorageData("goals", newList);
      // If there is no goals, auto-display the add goal form
      setIsAddGoalFormDisplayed(newList?.length === 0);
      return newList;
    });
  };

  const onReminderToggledCallback = (updatedGoal: Goal) => {
    setGoals((currentGoals) => {
      const newList: Goal[] = currentGoals.map((item) => {
        if (item.id === updatedGoal.id) return updatedGoal;
        return item;
      });
      // Save in local storage (offline)
      LocalStorageService.setLocalStorageData("goals", newList);
      return newList;
    });
  };

  const onGoalCreatedCallback = (createdGoal: Goal) => {
    setGoals((currentGoals) => {
      const newList: Goal[] = sortGoalsList([...currentGoals, createdGoal]);
      // Save in local storage (offline)
      LocalStorageService.setLocalStorageData("goals", newList);
      setIsAddGoalFormDisplayed(newList?.length === 0);
      return newList;
    });
  };

  // -----

  const noListLayout = <i>No goals have been added yet.</i>;

  const showListLayout =
    goals?.length > 0 &&
    goals.map((goal: Goal, idx: number) => (
      <GoalCard
        key={goal.id}
        goal={goal}
        handleDelete={(gId: number) =>
          GoalsService.deleteGoalById(gId, onDeleteGoalCallback)
        }
        handleReminderToggle={(g: Goal) =>
          GoalsService.toggleReminder(g, onReminderToggledCallback)
        }
      />
    ));

  // -----

  return (
    <Layout
      title={title}
      isAddGoalFormDisplayed={isAddGoalFormDisplayed}
      setIsAddGoalFormDisplayed={setIsAddGoalFormDisplayed}
      handleAddGoal={(g: Goal) =>
        GoalsService.createGoal(g, onGoalCreatedCallback)
      }
    >
      <section className="goals-section">
        <div className="goals_list text-center">
          {showListLayout || noListLayout}
        </div>
      </section>

      <GoBackLink />
    </Layout>
  );
}

Goals.defaultProps = {
  list: [],
};

// --------------------

const fetchGoalsFromLocalStorage = async () => {
  const localData: LocalStorageData | null =
    LocalStorageService.getLocalStorageData();
  const localList: Goal[] | undefined = localData?.goals;
  return localList ? sortGoalsList(localList) : null;
};

const fetchGoalsFromAPI = async () => {
  const res = await fetch(`${appConfig.API_URL}/goals`);
  const data = await res.json();
  return data ? sortGoalsList(data) : null;
};

const fetchData = async () => {
  return (
    (await fetchGoalsFromLocalStorage()) ?? (await fetchGoalsFromAPI()) ?? []
  );
};

// -----

// Fetches data at request/load time
export const getServerSideProps = async (ctx: any) => {
  const list: Goal[] = await fetchData();
  return { props: { list } as Props };
};
