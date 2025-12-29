import totalIcon from "../../assets/images/totalIcon.png";
import activeIcon from "../../assets/images/activeIcon.png";
import expIcon from "../../assets/images/expIcon.png";
import avgIcon from "../../assets/images/avgIcon.png";
import React from "react";
import type { DashboardCard } from "../../types/index";

export const cards: DashboardCard[] = [
  {
    id: 1,
    title: "Total Organizations",
    description: "140",
    marketPercent: "12% from last month",
    icon: totalIcon,
  },
  {
    id: 2,
    title: "Active vs Suspended",
    description: (
      <div>
        126 <span className="text-sm font-semibold">Active</span> / 8 {" "}
        <span className="text-sm font-semibold">Suspended</span>
      </div>
    ),
    marketPercent: "8% from last month",
    icon: activeIcon,
  },
  {
    id: 3,
    title: "Expiring in next 30 days",
    description: "150",
    marketPercent: "3% from last month",
    icon: expIcon,
  },
  {
    id: 4,
    title: "Avg. Licence Utilisation",
    description: "78%",
    marketPercent: "5% from last month",
    icon: avgIcon,
  },
];

export default cards;
