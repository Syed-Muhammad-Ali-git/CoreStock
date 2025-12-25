"use client";

/* ---------------- IMPORTS ---------------- */
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

/* ---------------- COMPONENT ---------------- */
const AdminDashboardHome: React.FC = () => {
  const router = useRouter();

  // ----- AUTHENTICATION CHECK -----
  // Redirect to login page if user data is not found in local storage.
  useEffect(() => {
    if (!localStorage.getItem("loginData")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      {/* ---------------- PAGE TITLE ---------------- */}
      <h1>Dashboard</h1>
    </>
  );
};

export default AdminDashboardHome;
