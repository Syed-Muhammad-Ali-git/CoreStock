"use client";

import React, { useState, useLayoutEffect } from "react";
import { protectedRoutes } from "./routes";
import SideBar from "../components/sidebar/sidebar";

type PathCheckerProps = {
  pathName: string;
};

const PathChecker = ({ pathName }: PathCheckerProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useLayoutEffect(() => {
    setDrawerOpen(window.innerWidth >= 768);
  }, []);

  const showSidebar = protectedRoutes.includes(pathName);

  return (
    <>{showSidebar && <SideBar open={drawerOpen} setOpen={setDrawerOpen} />}</>
  );
};

export default PathChecker;
