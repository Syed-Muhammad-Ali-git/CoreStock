// checking  path and set the header and side bar...!

import React from "react";
import { protectedRoutes } from "./routes";
import SideBar from "../components/sidebar/sidebar";
import Header from "../components/header/header";

interface PathCheckerProps {
  pathName: string;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const PathChecker = ({ pathName, open, setOpen }: PathCheckerProps) => {
  const show = protectedRoutes.includes(pathName);

  if (!show) return null;

  return (
    <>
      <Header sidebarOpen={open} />
      <SideBar open={open} setOpen={setOpen} />
    </>
  );
};

export default PathChecker;
