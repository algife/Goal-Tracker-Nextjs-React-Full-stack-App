// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// --------------------

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") return getHandler(req, res);
  if (req.method === "PATCH") return patchHandler(req, res);
  if (req.method === "DELETE") return deleteHandler(req, res);

  throw new Error("Request method not allowed");
}

// -----

function getHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query as { id: string };
  res.status(200).json(`GET /goals/[id] endpoint working for id ${id}`);
}

function patchHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query as { id: string };
  res.status(200).json(`PATCH /goals/[id] endpoint working for id ${id}`);
}

function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { id } = req.query as { id: string };
  res.status(200).json(`DELETE /goals/[id] endpoint working for id ${id}`);
}
