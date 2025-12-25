"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PathChecker from "./utils/pathChecker";
import { protectedRoutes } from "./utils/routes";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ClientLayoutProps {
  children: ReactNode;
}

const drawerWidth = 260;

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 900px)");

  useEffect(() => {
    setDrawerOpen(isDesktop);
  }, [isDesktop]);

  const showSidebar = protectedRoutes.includes(pathname || "");

  const mainStyle: React.CSSProperties = {
    transition: "margin-left 200ms ease",
    marginLeft:
      showSidebar && drawerOpen && pathname
        ? `${drawerWidth}px`
        : showSidebar
        ? "calc(64px + 10px)"
        : undefined,
    paddingTop: showSidebar ? "70px" : "0",
  };

  return (
    <>
      <PathChecker
        pathName={pathname}
        open={drawerOpen}
        setOpen={setDrawerOpen}
      />
      <main style={mainStyle}>{children}</main>
    </>
  );
};

export default ClientLayout;
