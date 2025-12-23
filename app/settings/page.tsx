// Note: Settings screen...!

"use client";

import React, { useState } from "react";
import DrawerComponent from "../components/sidebar/sidebar";

const Settings = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <DrawerComponent open={drawerOpen} setOpen={setDrawerOpen} />
      <div>Settings</div>
    </>
  );
};

export default Settings;
