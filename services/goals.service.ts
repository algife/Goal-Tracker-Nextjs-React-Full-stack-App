import appConfig from "../app.config";
import { Goal } from "../models";

export default abstract class GoalsService {
  static deleteGoalById = async (
    goalId: number,
    callback?: (goalId: number) => void
  ) => {
    console.log("[Deleting]", goalId);

    // Save in the database
    const res = await fetch(`${appConfig.API_URL}/goals/${goalId}`, {
      method: "DELETE",
    });

    if (callback != null) callback(goalId);
  };

  static toggleReminder = async (
    goal: Goal,
    callback?: (updatedGoal: Goal) => void
  ) => {
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

      if (callback != null) callback(updatedGoal);
    } catch (err: any) {
      console.error(err);
    }
  };

  static createGoal = async (
    goal: Goal,
    callback?: (createdGoal: Goal) => void
  ) => {
    const payloadItem: Goal = {
      ...goal,
      id: undefined, // id is generated automatically by the server
    };

    // Save in the database
    const res = await fetch(`${appConfig.API_URL}/goals`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payloadItem),
    });
    const createdGoal = await res.json();
    console.log("[Saved]", createdGoal);

    if (callback != null) callback(createdGoal);
  };
}
