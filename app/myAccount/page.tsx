"use client";

/* ---------------- IMPORTS ---------------- */
import React from "react";
import MyAccountForm from "../components/myAccount/myAccountForm";

/* ---------------- COMPONENT ---------------- */
const MyAccountPage = () => {
  return (
    <div className="bg-[#F2F4F7] h-auto md:h-140.5 p-1">
      {/* ---------------- BREADCRUMB ---------------- */}
      <h1 className="m-4 py-4">
        <span className="text-[#697586] font-medium">Dashboard</span>
        <span className="text-[#697586] font-extrabold"> &gt;&gt; </span>
        <span className="text-[#FF8A3D] font-medium">My Account</span>
      </h1>

      {/* ---------------- MY ACCOUNT FORM ---------------- */}
      <MyAccountForm />
    </div>
  );
};

export default MyAccountPage;
