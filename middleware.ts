import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  const isAuthPage = req.nextUrl.pathname.startsWith("/sign-in")
  const isProtectedPage =
    req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/welcome")

  if (!isAuthenticated && isProtectedPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url))
  }

  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/sign-in", "/dashboard/:path*", "/welcome/:path*"],
}
