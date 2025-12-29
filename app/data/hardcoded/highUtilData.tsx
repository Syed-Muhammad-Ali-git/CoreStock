import type { HighUtilRow } from "../../types/index";
import React from "react";

const progress = (
  <div className="flex items-center ">
    <div
      style={{
        width: "80px",
        height: "8px",
        backgroundColor: "#FFE5CC",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          backgroundColor: "#FE6511",
          borderRadius: "10px",
          transition: "width 0.3s ease",
        }}
      ></div>
    </div>
    <div style={{ fontSize: "12px", marginLeft: "10px" }}>60%</div>
  </div>
);

export const highUtilRows: HighUtilRow[] = [
  {
    Organization: "ABC Infrastructure Ltd",
    seatsUsed: "24/30",
    expiryDate: "14 Nov 2025",
    used: progress,
    billingStatus: "Pending",
  },
  {
    Organization: "NovaTech Solutions",
    seatsUsed: "45/50",
    expiryDate: "28 Oct 2025",
    used: progress,
    billingStatus: "Paid",
  },
  {
    Organization: "BluePeak Engineering",
    seatsUsed: "8/10",
    expiryDate: "15 Sep 2025",
    used: progress,
    billingStatus: "Unpaid",
  },
  {
    Organization: "UrbanStack Enterprises",
    seatsUsed: "12/20",
    expiryDate: "22 Aug 2025",
    used: progress,
    billingStatus: "Paid",
  },
  ...Array.from({ length: 20 }).map((_, i): HighUtilRow => ({
    Organization: `Company ${i + 1}`,
    seatsUsed: "10/20",
    expiryDate: "01 Dec 2025",
    used: progress,
    billingStatus: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Unpaid",
  })),
];

export default highUtilRows;
