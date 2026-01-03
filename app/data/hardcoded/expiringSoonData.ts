import type { ExpiringRow } from "../../types/index";

const expiringRows: ExpiringRow[] = [
  {
    Organization: "ABC Infrastructure Ltd",
    status: "Active",
    seatsUsed: "24/30",
    expiryDate: "14 Nov 2025",
    billingStatus: "Pending",
    created: "01 Jan 2024",
  },
  {
    Organization: "NovaTech Solutions",
    status: "Active",
    seatsUsed: "45/50",
    expiryDate: "28 Oct 2025",
    billingStatus: "Paid",
    created: "15 Feb 2024",
  },
  {
    Organization: "BluePeak Engineering",
    status: "Trial",
    seatsUsed: "8/10",
    expiryDate: "15 Sep 2025",
    billingStatus: "Unpaid",
    created: "10 Mar 2024",
  },
  {
    Organization: "UrbanStack Enterprises",
    status: "Active",
    seatsUsed: "12/20",
    expiryDate: "22 Aug 2025",
    billingStatus: "Paid",
    created: "05 Apr 2024",
  },
  ...Array.from({ length: 20 }).map(
    (_, i): ExpiringRow => ({
      Organization: `Company ${i + 1}`,
      status: "Active",
      seatsUsed: "10/20",
      expiryDate: "01 Dec 2025",
      billingStatus: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Unpaid",
      created: `01 May 202${4 + (i % 2)}`,
    })
  ),
];

export default expiringRows;
