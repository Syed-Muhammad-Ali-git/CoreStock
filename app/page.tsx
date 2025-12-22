// Note: This is Home Screen...!

"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AdminDashboardHome = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("loginData")) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div>AdminDashboardHome</div>
      <button
        className="border"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default AdminDashboardHome;
