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

export interface ToggleButtonProps {
  initial?: boolean;
  onChange?: (state: boolean) => void;
}

export interface ResetPasswordModalType {
  password: string;
  confirmPassword: string;
}

export interface DashboardCard {
  id: number;
  title: string;
  description: React.ReactNode | string;
  marketPercent: string;
  icon: StaticImageData | string;
}

export default SidebarItem;
