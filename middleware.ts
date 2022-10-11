import { NextRequest, NextResponse } from "next/server";
const signedInPages = ["/admin", "/members "];

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/")) {
    // This logic is only applied to /about
    console.log("VO");
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    // This logic is only applied to /dashboard
  }
}
