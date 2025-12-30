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
    status: "Active",
    seatsUsed: "24/30",
    expiryDate: "14 Nov 2025",
    used: progress,
    billingStatus: "Paid",
    created: "31 Dec 2025",
  },
  {
    Organization: "NovaTech Solutions",
    status: "Trial",
    seatsUsed: "45/50",
    expiryDate: "28 Oct 2025",
    used: progress,
    billingStatus: "Overstock",
    created: "31 Dec 2025",
  },
  {
    Organization: "BluePeak Engineering",
    status: "Expired",
    seatsUsed: "8/10",
    expiryDate: "15 Sep 2025",
    used: progress,
    billingStatus: "Unpaid",
    created: "31 Dec 2025",
  },
  {
    Organization: "UrbanStack Enterprises",
    status: "Suspended",
    seatsUsed: "12/20",
    expiryDate: "22 Aug 2025",
    used: progress,
    billingStatus: "Critical",
    created: "31 Dec 2025",
  },
  ...Array.from({ length: 20 }).map(
    (_, i): HighUtilRow => ({
      Organization: `Company ${i + 1}`,
      status: "Active",
      seatsUsed: "10/20",
      expiryDate: "01 Dec 2025",
      used: progress,
      billingStatus:
        i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Overstock" : "Unpaid",
      created: "31 Dec 2025",
    })
  ),
];

export default highUtilRows;
