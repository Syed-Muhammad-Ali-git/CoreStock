import React from "react";
import { StaticImageData } from "next/image";

export interface SidebarItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

export interface SideBarProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

export interface DashboardCard {
  id: number;
  title: string;
  description: React.ReactNode | string;
  marketPercent: string;
  icon: StaticImageData | string;
}

export interface ExpiringRow {
  Organization: string;
  status: "Active" | "Trial" | "Expired" | "Suspended";
  seatsUsed: string;
  expiryDate: string;
  billingStatus:
    | "Paid"
    | "Pending"
    | "Unpaid"
    | "Suspended"
    | "Critical"
    | "Overstock";
  created: string;
}

export interface HighUtilRow extends ExpiringRow {
  used: React.ReactNode;
}

export interface TableDataType {
  id: string;
}
