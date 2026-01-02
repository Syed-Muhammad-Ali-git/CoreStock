import React, { useState, useEffect } from "react";
import DashboardActionButtons from "./dashboardActionButtons";
import styles from "./dashboardHeader.module.css";

const DashboardHeader = () => {
  const [time, setTime] = useState("");
  const [loginData, setLoginData] = useState<{ fullName: string } | null>(
    null
  );

  useEffect(() => {
    // Set formatted date
    setTime(new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }));
    
    // Get login data safely from localStorage
    const data = localStorage.getItem("loginData");
    setLoginData(data ? JSON.parse(data) : null);
  }, []);

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
