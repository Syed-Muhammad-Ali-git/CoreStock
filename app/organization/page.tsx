// Note: Organization screen...!

"use client";

import React, { useState } from "react";
import DrawerComponent from "../components/sidebar/sidebar";

const Organization = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <>
      <DrawerComponent open={drawerOpen} setOpen={setDrawerOpen} />
      <div>Organization</div>
    </>
  );
};

export default Organization;
