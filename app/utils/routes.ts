/* ---------------- ROUTE DEFINITIONS ---------------- */

/**
 * An array of routes that are accessible to the public (e.g., login page).
 * These routes do not require authentication.
 */
const publicRoutes = ["/login"];

/**
 * An array of routes that are protected and require authentication.
 * The sidebar and header will be displayed on these routes.
 */
const protectedRoutes = ["/", "/audit", "/organization", "/settings", "/myAccount"];

export { publicRoutes, protectedRoutes };
