/* ---------------- IMPORTS ---------------- */
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import ClientLayout from "./client-layout";

/* ---------------- METADATA ---------------- */
export const metadata: Metadata = {
  title: "Core Stock",
  description: "Core Stock by Blockwork IT",
};

/* ---------------- COMPONENT ---------------- */
const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body cz-shortcut-listen="true">
        {/* ---------------- MANTINE PROVIDER ---------------- */}
        <MantineProvider>
          {/* ---------------- CLIENT LAYOUT (Handles conditional rendering of sidebar/header) ---------------- */}
          <ClientLayout>{children}</ClientLayout>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
