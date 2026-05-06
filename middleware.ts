import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Define which routes require authentication
  const isProtectedRoute =
    pathname.startsWith("/cart") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/profile");

  // Public routes (no token needed)
  const isPublicRoute =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/products") || 
    pathname === "/";

  // If it's not protected, allow access immediately
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // If it's protected but no token, redirect to login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Verify token
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET not set");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    jwt.verify(token, secret);
    return NextResponse.next(); // allow access
  } catch (error) {
    // Invalid/expired token – redirect to login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }
}

// Middleware runs only on these routes (improves performance)
export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/profile/:path*",
    "/products/:path*",   // optional: you can remove to make products public
    "/login",
    "/register",
  ],
};