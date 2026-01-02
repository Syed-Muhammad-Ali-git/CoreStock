import React from "react";
import { Card } from "@/app/components/cardFunctions/cardFunction";

const UsersTabHeader = () => {
  const usagePercent = 80; // yahan percentage change karo

  return (
    <div className="satoshi-font">
      <Card title="Licence & Users" className="border border-[#EEF2F6] h-full">
        <p className="text-sm mb-3">24 / 30 seats used</p>

        <div className="relative w-full">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#FE6511] h-2 rounded-full transition-all duration-300"
              style={{ width: `${usagePercent}%` }}
            />
          </div>

          {/* Percentage Text at the right end */}
          <span className="absolute -top-6 text-xs text-gray-500 whitespace-nowrap right-0">
            {usagePercent}% utilisation
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UsersTabHeader;
