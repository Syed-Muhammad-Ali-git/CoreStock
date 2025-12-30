"use client";

/* ---------------- IMPORTS ---------------- */
import React, { useState } from "react";
import OrganizationTable from "../components/organization/table";
import PageHeader from "../components/common/pageHeader";

/* ---------------- COMPONENT ---------------- */
const Organization = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#F4F3F3] border border-[#F4F3F3] p-5">
      {/* Organization Header */}
      <PageHeader
        title="Organizations"
        subtitle="Your complete overview of every organization in CoreStock."
        showButton={true}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showSearch={true}
      />

      {/* Organization Table */}
      <OrganizationTable searchQuery={searchQuery} />
    </div>
  );
};

export default Organization;
