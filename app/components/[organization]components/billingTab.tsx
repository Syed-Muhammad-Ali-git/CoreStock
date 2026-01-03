import React from "react";
import BillingSummary from "./billingTabcomponent/billingHeader";
import BillingHistoryTable from "./billingTabcomponent/billingHistoryTable";

const BillingTab = () => {
  return (
    <>
      {/* billing tab header */}
      <BillingSummary
        currentTerm="1 Jan 2024 - 31 Dec 2024"
        annualValue="£4,200"
        nextRenewal="31 Dec 2024 (48 days left)"
        billingStatus="Paid"
      />

      {/* billing history table */}

      <BillingHistoryTable />
    </>
  );
};

export default BillingTab;
