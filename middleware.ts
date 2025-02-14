import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const publicRoutes = ["/", "/sign-in", "/sign-up"]

export default clerkMiddleware(async (auth, req) => {
  const url = new URL(req.url)
  const isPublicRoute = publicRoutes.includes(url.pathname)

  if (!isPublicRoute) {
    const session = await auth()
    if (!session.userId) {
      const signInUrl = new URL("/sign-in", req.url)
      return NextResponse.redirect(signInUrl)
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
