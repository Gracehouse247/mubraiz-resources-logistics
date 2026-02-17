import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/portal(.*)"]);
const isAdminRoute = createRouteMatcher(["/portal/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    // If the route is a portal route, protect it
    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // If it's an admin route, check for role
    // Note: auth().sessionClaims.metadata.role is set in Clerk dashboard
    if (isAdminRoute(req)) {
        const authObject = await auth();
        const role = (authObject.sessionClaims?.metadata as any)?.role;

        // If not an admin role, redirect to unauthorized
        if (!role || !['super_admin', 'executive', 'fleet_manager', 'support_agent'].includes(role)) {
            const url = new URL("/", req.url);
            return NextResponse.redirect(url);
        }
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
