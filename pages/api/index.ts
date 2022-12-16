// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ApiErrorResponse from "../../models/api-error-response";

// --------------------

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | ApiErrorResponse>
) {
  res.status(200).send("API is up and running");
}
