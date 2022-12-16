// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// --------------------

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") return getHandler(req, res);
  if (req.method === "POST") return postHandler(req, res);

  throw new Error("Request method not allowed");
}

// -----

function getHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json("GET /goals endpoint working");
}

function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json("POST /goals Endpoint working");
}
