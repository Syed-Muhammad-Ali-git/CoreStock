import React, { useState } from "react";
import DashboardActionButtons from "./dashboardActionButtons";
import styles from "./dashboardHeader.module.css";

const DashboardHeader = () => {
  const [time, setTime] = useState(() => {
    // Set formatted date
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  });
  const [loginData, setLoginData] = useState<{ fullName: string } | null>(
    () => {
      // Get login data safely from localStorage
      if (typeof window !== "undefined") {
        const data = localStorage.getItem("loginData");
        return data ? JSON.parse(data) : null;
      }
      return null;
    }
  );

  return (
    <section className={styles.header}>
      {/* Date */}
      <div className={styles.date}>{time}</div>

      {/* Greeting and buttons */}
      <div className={styles.greetingContainer}>
        {/* Greeting */}
        <div className={styles.greeting}>
          Good Evening, {loginData?.fullName || "User"} 👋
        </div>

        {/* Action Buttons */}
        <DashboardActionButtons />
      </div>
    </section>
  );
};

export default DashboardHeader;
