import type { ExpiringRow } from "../../types/index";

export const expiringRows: ExpiringRow[] = [
  {
    Organization: "ABC Infrastructure Ltd",
    seatsUsed: "24/30",
    expiryDate: "14 Nov 2025",
    billingStatus: "Pending",
  },
  {
    Organization: "NovaTech Solutions",
    seatsUsed: "45/50",
    expiryDate: "28 Oct 2025",
    billingStatus: "Paid",
  },
  {
    Organization: "BluePeak Engineering",
    seatsUsed: "8/10",
    expiryDate: "15 Sep 2025",
    billingStatus: "Unpaid",
  },
  {
    Organization: "UrbanStack Enterprises",
    seatsUsed: "12/20",
    expiryDate: "22 Aug 2025",
    billingStatus: "Paid",
  },
  ...Array.from({ length: 20 }).map((_, i): ExpiringRow => ({
    Organization: `Company ${i + 1}`,
    seatsUsed: "10/20",
    expiryDate: "01 Dec 2025",
    billingStatus: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Unpaid",
  })),
];

export default expiringRows;
