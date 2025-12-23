// Note: This is Dashboard Screen...!

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DrawerComponent from "./components/sidebar/sidebar";

const drawerWidth = 260;

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
          marginLeft: drawerOpen ? `${drawerWidth}px` : "0",
          width: "100%",
          transition: "margin-left 0.3s ease",
        }}
      >
        Dashboard
      </div>
    </>
  );
};

export default AdminDashboardHome;
