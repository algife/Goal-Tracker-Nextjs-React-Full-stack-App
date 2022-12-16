import { Goal } from "./models";

/**
 * !     HELPER / UTILITY FUNCTIONS
 * ======================================
 * */

export const sortGoalsList = (goals: Goal[]): Goal[] => {
  let sorted = [...goals];
  sorted.sort((a, b) => {
    if (a.deadline != null && b.deadline != null)
      return Date.parse(a.deadline) - Date.parse(b.deadline);
    if (a.id != null && b.id != null) return a.id - b.id;

    return 1;
  });
  return sorted;
};
