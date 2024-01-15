import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = ["/", "/dashboard", "/login", "/register"];

export function middleware(request: NextRequest) {
  const token = cookies().get("token");
  if (!publicRoutes.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};
