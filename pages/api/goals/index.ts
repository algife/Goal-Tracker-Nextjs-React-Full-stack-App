// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import mockDatabase from "../../../mock.database";
import ApiErrorResponse from "../../../models/api-error-response";
import Goal from "../../../models/goal";

// --------------------

let rowIncrementValue: number = 1;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | Goal[] | ApiErrorResponse>
) {
  if (req.method === "GET") return getHandler(req, res);
  if (req.method === "POST") return postHandler(req, res);

  throw new Error("Request method not allowed");
}

// -----

function getHandler(
  req: NextApiRequest,
  res: NextApiResponse<Goal[] | ApiErrorResponse>
) {
  res.status(200).json(mockDatabase.goals);
}

function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Goal | ApiErrorResponse>
) {
  // Build the new item to be inserted
  const newItem: Goal = {
    ...req.body,
    // Fields set-up at API level
    createdAt: moment().toISOString(),
    id: ++rowIncrementValue, // increment value beforehand and assign it as the new id
  };
  mockDatabase.goals.push(newItem); // Save into the mock database

  return res.status(200).json(newItem);
}
