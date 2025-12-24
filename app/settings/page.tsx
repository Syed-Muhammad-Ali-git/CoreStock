// Note: Settings screen...!

"use client";

import React, { useState } from "react";
import DrawerComponent from "../components/sidebar/sidebar";

const Settings = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <DrawerComponent open={drawerOpen} setOpen={setDrawerOpen} />
      <div
        style={{
          marginLeft: drawerOpen ? "270px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        Settings
      </div>
    </>
  );
};

export default Settings;
