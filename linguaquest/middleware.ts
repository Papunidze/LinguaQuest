import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("auth")?.value;

  const loginUrl = new URL("/auth/login", request.url);
  const homeUrl = new URL("/", request.url);

  if (user) {
    if (request.nextUrl.pathname === "/auth/login") {
      return NextResponse.redirect(homeUrl);
    }
    console.log(
      `Authenticated user accessing ${request.nextUrl.pathname}, allowing access.`
    );
    return NextResponse.next();
  } else {
    if (request.nextUrl.pathname !== "/auth/login") {
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/auth/login"],
};
