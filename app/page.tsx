"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "./components/dashboard/dashboardHeader";
import DashboardCards from "./components/dashboard/dashboardCards";
import ExpiringSoonTable from "./components/dashboard/expiringSoonTable";
import HighLicenceUtilizationTable from "./components/dashboard/HighLicenceUtilizationTable";

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
    <div className="bg-[#F4F3F3] py-2 px-4 flex flex-col gap-5">
      {/* Dashboard date header  */}
      <div>
        <DashboardHeader />
      </div>

      {/* dashboard cards */}
      <div>
        <DashboardCards />
      </div>

      {/* 1st Table */}
      <div>
        <ExpiringSoonTable />
      </div>

      {/* 2nd table */}
      <div>
        <HighLicenceUtilizationTable />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
