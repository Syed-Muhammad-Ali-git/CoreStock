/* ---------------- ROUTE DEFINITIONS ---------------- */

const publicRoutes = ["/login"];
const protectedRoutes = [
  "/",
  "/audit",
  "/organization",
  "/settings",
  "/myAccount",
  "/organization/[name]",
  "/organization/create-organization",
];

export { publicRoutes, protectedRoutes };
