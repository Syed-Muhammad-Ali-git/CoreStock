"use client";

import React from "react";
import { CreateOrganizationButton } from "../organization/organizationPageHeader";
import styles from "./dashboardActinButtons.module.css";
import { useRouter } from "next/navigation";

const DashboardActionButtons = () => {
  const router = useRouter();

  const handleViewOrganization = () => {
    router.push("/organization");
  };
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>View Expired</button>
      <button className={styles.button} onClick={handleViewOrganization}>
        View All Organization
      </button>
      <CreateOrganizationButton />
    </div>
  );
};

export default DashboardActionButtons;
