/* ---------------- ROUTE DEFINITIONS ---------------- */

const publicRoutes = ["/login"];
const protectedRoutes = [
  "/",
  "/audit",
  "/organization",
  "/settings",
  "/myAccount",
  "/organization/name",
  "/organization/create-organization",
  "/organization/[organization]",
];

export { publicRoutes, protectedRoutes };
