"use client";

/* ---------------- IMPORTS ---------------- */
import React from "react";
import OrganizationTable from "../components/organization/table";
import OrganizationHeader from "../components/organization/header";

/* ---------------- COMPONENT ---------------- */
const Organization = () => {
  return (
    <div className="bg-[#F4F3F3] border border-[#F4F3F3] p-5">
      {/* Organization Header */}
      <OrganizationHeader />

      {/* Organization Table */}
      <OrganizationTable />
    </div>
  );
};

export default Organization;
