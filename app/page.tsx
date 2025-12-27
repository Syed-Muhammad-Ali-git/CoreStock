"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "./components/dashboard/dashboardHeader/dashboardHeader";

/* ---------------- COMPONENT ---------------- */
const AdminDashboardHome = () => {
  const router = useRouter();

  // ----- AUTHENTICATION CHECK -----
  // Redirect to login page if user data is not found in local storage.
  useEffect(() => {
    if (!localStorage.getItem("loginData")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="bg-[#F4F3F3] h-screen py-2">
      {/* Dashboard date header  */}
      <div className="">
        <DashboardHeader />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
