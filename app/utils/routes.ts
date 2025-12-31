/* ---------------- ROUTE DEFINITIONS ---------------- */

const publicRoutes = ["/login"];
const protectedRoutes = [
  "/",
  "/audit",
  "/organization",
  "/settings",
  "/myAccount",
  "/organization/[name]"
];

export { publicRoutes, protectedRoutes };
