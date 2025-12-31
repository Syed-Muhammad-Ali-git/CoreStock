import React from "react";
import { CreateOrganizationButton } from "../organization/organizationPageHeader";
import styles from "./dashboardStyle.css";

const DashboardActionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>View Expired</button>
      <button className={styles.button}>View All Organization</button>
      <CreateOrganizationButton />
    </div>
  );
};

export default DashboardActionButtons;
