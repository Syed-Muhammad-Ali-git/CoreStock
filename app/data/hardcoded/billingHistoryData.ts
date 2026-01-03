import { BillingHistoryDataType } from "@/app/types/index";

const billingHistoryData: BillingHistoryDataType[] = [
  {
    invoiceDate: "31 Dec 2025",
    invoice: "INV-2301",
    amount: "£4,200",
    period: "Jan-Dec 2024",
    status: "paid",
  },
  {
    invoiceDate: "31 Dec 2025",
    invoice: "INV-2301",
    amount: "£4,200",
    period: "Jan-Dec 2024",
    status: "paid",
  },
  {
    invoiceDate: "31 Dec 2025",
    invoice: "INV-2301",
    amount: "£4,200",
    period: "Jan-Dec 2024",
    status: "paid",
  },
  {
    invoiceDate: "31 Dec 2025",
    invoice: "INV-2301",
    amount: "£4,200",
    period: "Jan-Dec 2024",
    status: "paid",
  },
  {
    invoiceDate: "31 Dec 2025",
    invoice: "INV-2301",
    amount: "£4,200",
    period: "Jan-Dec 2024",
    status: "paid",
  },
  ...Array.from({ length: 20 }).map(
    (_, i): BillingHistoryDataType => ({
      invoiceDate: "31 Dec 2025",
      invoice: "INV-2301",
      amount: "£4,200",
      period: "Jan-Dec 2024",
      status: i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Unpaid",
    })
  ),
];

export default billingHistoryData;
