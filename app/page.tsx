// Note: This is Dashboard Screen...!

"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminDashboardHome: React.FC = () => {
  const router = useRouter();
  // condition to check user login or not...!
  useEffect(() => {
    if (!localStorage.getItem("loginData")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <h1>Dashboard</h1>
      {/* <div
        style={{
          marginLeft: drawerOpen ? "270px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        Audit
      </div> */}
    </>
  );
}
export default AdminDashboardHome;
