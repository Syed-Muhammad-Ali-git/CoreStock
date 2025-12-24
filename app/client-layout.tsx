"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PathChecker from "./utils/pathChecker";
import { protectedRoutes } from "./utils/routes";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ClientLayoutProps {
    children: ReactNode;
}

const drawerWidth = 260;

const ClientLayout = ({ children }: ClientLayoutProps) => {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    useEffect(() => {
        setDrawerOpen(isDesktop);
    }, [isDesktop]);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setDrawerOpen(window.innerWidth >= 768);
    //     };
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    const showSidebar = protectedRoutes.includes(pathname || "");

    // main container style: shift content when sidebar is open on protected routes
    const mainStyle: React.CSSProperties = {
        transition: "margin-left 200ms ease",
        marginLeft:
            showSidebar && drawerOpen && pathname ? `${drawerWidth}px` : undefined,
        padding: 16,
        paddingTop: 72,
    };

    return (
        <>
            <PathChecker pathName={pathname} open={drawerOpen} setOpen={setDrawerOpen} />
            <main style={mainStyle}>{children}</main>
        </>
    );
};

export default ClientLayout;
