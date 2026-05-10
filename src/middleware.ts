import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "portfolio_auth";
const TOKEN = "magdalena2026";

export function middleware(request: NextRequest) {
  if (request.cookies.get(COOKIE)?.value === TOKEN) {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|unlock|.*\\..*).*)",
  ],
};
