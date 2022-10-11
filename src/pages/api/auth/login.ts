import { NextRequest, NextResponse } from "next/server";
import { parseCookies } from "nookies";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextRequest, res: NextResponse) {
  const { cookies } = req;

  res.json(cookies);
}
