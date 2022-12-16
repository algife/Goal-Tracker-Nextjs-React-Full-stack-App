import moment from "moment";
import MockDatabaseData from "./models/mock-database-data";
import Goal from "./models/goal";

// --------------------

export const goals: Goal[] = [
  {
    id: 1,
    title: "Set-up your first goal",
    description:
      "Your first goal is to learn how to use this tool. In order to do that, your objective is to add a new goal, delete this one and set a reminder",
    reminder: true,
    createdAt: moment().toISOString(),
    deadline: moment().add(1, "week").toISOString(),
    completedAt: undefined,
  },
];

const mockDatabase: MockDatabaseData = {
  goals,
};

// --------------------

export default mockDatabase;
