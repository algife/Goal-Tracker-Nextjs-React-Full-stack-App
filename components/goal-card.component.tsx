import IGoal from "../models/goal";

// ------------------------------------------

interface Props {
  goal: IGoal;
  handleDeleteGoal: (goalId: number) => any;
  handleToggleReminderGoal: (goal: IGoal) => any;
}

// ------------------------------------------

export default function GoalCard({
  goal,
  handleDeleteGoal,
  handleToggleReminderGoal,
}: Props) {
  return (
    <div className="goal-card">
      <>
        <h4>Goal details go here:</h4>
        <p>id: {goal.id}</p>
        <p>title: {goal.title}</p>
        <p>description: {goal.description}</p>
        <p>deadline: {goal.deadline}</p>
        <p>reminder: {goal.reminder}</p>

        <h4>Actions:</h4>
        <button id="delete-goal" onClick={(e) => handleDeleteGoal(goal.id!)}>
          Delete goal
        </button>
        <button
          id="delete-goal"
          onClick={(e) => handleToggleReminderGoal(goal)}
        >
          Set reminder
        </button>
      </>
    </div>
  );
}
