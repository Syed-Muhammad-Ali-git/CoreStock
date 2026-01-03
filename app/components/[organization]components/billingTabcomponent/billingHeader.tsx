import React from "react";

interface BillingSummaryProps {
  currentTerm: string;
  annualValue: string;
  nextRenewal: string;
  billingStatus: "Paid" | "Unpaid" | "Pending";
}

const BillingSummary: React.FC<BillingSummaryProps> = ({
  currentTerm,
  annualValue,
  nextRenewal,
  billingStatus,
}) => {
  const statusStyles = {
    Paid: "bg-green-100 text-green-700",
    Unpaid: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-4">
        Billing Summary
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Term */}
        <div>
          <p className="text-xs text-gray-500">Current Term</p>
          <p className="text-sm font-medium text-gray-900">{currentTerm}</p>
        </div>

        {/* Annual Value */}
        <div>
          <p className="text-xs text-gray-500">Annual Value</p>
          <p className="text-sm font-medium text-gray-900">{annualValue}</p>
        </div>

        {/* Next Renewal */}
        <div>
          <p className="text-xs text-gray-500">Next Renewal</p>
          <p className="text-sm font-medium text-gray-900">{nextRenewal}</p>
        </div>

        {/* Billing Status */}
        <div>
          <p className="text-xs text-gray-500">Billing Status</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full ${statusStyles[billingStatus]}`}
          >
            {billingStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;
