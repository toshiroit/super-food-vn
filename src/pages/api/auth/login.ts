import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { cookies } = req;
  try {
    res.status(200).json(cookies)
  } catch (err) {

  }
}

