// src/middleware.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Clerk's initialization middleware — required for ClerkProvider to work.



import { clerkMiddleware } from "@clerk/nextjs/server";

// No arguments = initialize Clerk on every request, protect nothing(This is the setup for a fully public portfolio)
export default clerkMiddleware();

// matcher: tells Next.js which requests this middleware should run on
// This is Clerk's official recommended matcher pattern
// It skips static assets (.css, .js, images, fonts) for performance
// It runs on ALL page routes and API routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run on API routes
    "/(api|trpc)(.*)",
  ],
};