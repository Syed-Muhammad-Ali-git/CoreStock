/* ---------------- IMPORTS ---------------- */
import React from "react";
import MyAccountForm from "../components/myAccount/myAccountForm";
import { IconChevronsRight } from "@tabler/icons-react";

/* ---------------- COMPONENT ---------------- */
const MyAccountPage = () => {
  return (
    <div className="bg-[#F2F4F7] h-auto md:h-140.5 pt-1">
      {/* ---------------- BREADCRUMB ---------------- */}
      <h1 className="pb-3 m-2 flex items-center gap-1">
        <span className="text-[#697586] font-medium">Dashboard</span>
        <span className="text-[#697586] font-extrabold inline-block">
          <IconChevronsRight size={20} stroke={2} />
        </span>
        <span className="text-[#FF8A3D] font-medium">My Account</span>
      </h1>

      {/* ---------------- MY ACCOUNT FORM ---------------- */}
      <MyAccountForm />
    </div>
  );
};

export default MyAccountPage;
