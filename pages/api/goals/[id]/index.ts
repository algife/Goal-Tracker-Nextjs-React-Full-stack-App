// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mockDatabase from "../../../../mock.database";
import ApiErrorResponse from "../../../../models/api-error-response";
import Goal from "../../../../models/goal";

// --------------------

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | ApiErrorResponse>
) {
  if (req.method === "GET") return getHandler(req, res);
  if (req.method === "PATCH") return patchHandler(req, res);
  if (req.method === "DELETE") return deleteHandler(req, res);

  throw new Error("Request method not allowed");
}

// -----

function getHandler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | ApiErrorResponse>
) {
  const { id } = req.query as { id: string };
  const { item, index } = findDBGoal(id);

  // NOT FOUND
  if (!item)
    return res.status(404).json({ message: `Goal with id ${id} NOT FOUND.` });

  // FOUND
  return res.status(200).json(item);
}

function patchHandler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | ApiErrorResponse>
) {
  const { id } = req.query as { id: string };
  const { item, index } = findDBGoal(id);

  // NOT FOUND
  if (!item)
    return res.status(404).json({ message: `Goal with id ${id} NOT FOUND.` });

  // FOUND
  const payload: Partial<Goal> = { ...req.body };
  const newItem: Goal = { ...item, ...payload };
  // Save in DB
  mockDatabase.goals[index] = newItem;

  return res.status(200).json(newItem);
}

function deleteHandler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | ApiErrorResponse>
) {
  const { id } = req.query as { id: string };
  const { item, index } = findDBGoal(id);

  // NOT FOUND
  if (!item)
    return res.status(404).json({ message: `Goal with id ${id} NOT FOUND.` });

  // FOUND
  const deletedItem = mockDatabase.goals.splice(index, 1)[0];
  return res.status(200).json(deletedItem);
}

// -----

function findDBGoal(queryId: any): { item: Goal | undefined; index: number } {
  const id = Number.parseInt(queryId as string, 10);
  const index = mockDatabase.goals.findIndex((goal) => goal.id === id);
  const item = mockDatabase.goals[index];
  return { item, index };
}
