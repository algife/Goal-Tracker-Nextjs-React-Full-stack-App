import { useState } from "react";
import appConfig from "../../app.config";
import { GoBackLink } from "../../components";
import GoalCard from "../../components/goal-card.component";
import Layout from "../../components/layout.component";
import { sortGoalsList } from "../../helpers";
import mockDatabase from "../../mock.database";
import { Goal } from "../../models";

// --------------------

interface Props {
  list: Goal[];
}

// -----

export default function Goals({ list }: Props) {
  const [goals, setGoals] = useState<Goal[]>(mockDatabase.goals); // TODO Change to "list" once data is retrieved from DB

  const title: string = `${
    appConfig.userName ? `${appConfig.userName}'s ` : ""
  }Goals`;

  // -----

  const handleDeleteGoal = async (goalId: number) => {
    console.log("[Deleting]", goalId);

    // Save in the database
    const res = await fetch(`${appConfig.API_URL}/goals/${goalId}`, {
      method: "DELETE",
    });

    // const success = (await res).status === 200;
    setGoals((currentGoals) => {
      const newList: Goal[] = sortGoalsList(
        (currentGoals ?? []).filter((goal) => goal.id !== goalId)
      );
      return newList;
    });
  };

  const handleToggleReminderGoal = async (goal: Goal) => {
    console.log("[Toggling Reminder for task]", goal.id);

    const newItem = { ...goal, reminder: !goal.reminder };

    // Save in database
    try {
      const res = await fetch(`${appConfig.API_URL}/goals/${goal.id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ reminder: newItem.reminder }),
      });
      const updatedGoal: Goal = await res.json();

      setGoals((currentGoals) => {
        const newList: Goal[] = currentGoals.map((item) => {
          if (item.id === updatedGoal.id) return updatedGoal;
          return item;
        });
        return newList;
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  // -----

  const noListLayout = <i>No goals have been added yet.</i>;

  const showListLayout =
    goals?.length > 0 &&
    goals.map((goal: Goal, idx: number) => (
      <GoalCard
        key={goal.id}
        goal={goal}
        handleDeleteGoal={handleDeleteGoal}
        handleToggleReminderGoal={handleToggleReminderGoal}
      />
    ));

  // -----

  return (
    <Layout title={title}>
      <section className="goals-section">
        <div className="goals_list text-center">
          {showListLayout || noListLayout}
        </div>
      </section>

      <GoBackLink />
    </Layout>
  );
}
