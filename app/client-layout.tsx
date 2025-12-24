"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import PathChecker from "./utils/pathChecker";

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
    const pathname = usePathname();

    return (
        <>
            <PathChecker pathName={pathname} />
            {children}
        </>
    );
};

export default ClientLayout;
