// Note: This is Home Screen...!

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DrawerComponent from "./components/sidebar/sidebar";

const AdminDashboardHome = () => {
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
    </>
  );
};

export default AdminDashboardHome;
