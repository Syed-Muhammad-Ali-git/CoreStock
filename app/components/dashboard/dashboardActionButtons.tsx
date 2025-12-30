import React from "react";
import { CreateOrganizationButton } from "../common/pageHeader";
import styles from "./dashboardActionButtons.module.css";

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
