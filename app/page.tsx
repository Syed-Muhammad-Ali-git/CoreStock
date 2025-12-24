// Note: This is Dashboard Screen...!

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DrawerComponent from "./components/sidebar/sidebar";

const AdminDashboardHome: React.FC = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(true);

  // condition to check user login or not...!
  useEffect(() => {
    if (!localStorage.getItem("loginData")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <DrawerComponent open={drawerOpen} setOpen={setDrawerOpen} />
      <div
        style={{
          marginLeft: drawerOpen ? "270px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        Dashboard
      </div>
    </>
  );
};

export default AdminDashboardHome;
