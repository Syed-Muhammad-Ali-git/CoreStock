import type { HighUtilRow } from "../../types/index";
import React from "react";

const progress = (
  <div className="flex items-center">
    <div className="w-20 h-2 bg-[#FFE5CC] rounded-full overflow-hidden">
      <div className="w-[60%] h-full bg-[#FE6511] rounded-full transition-all duration-300"></div>
    </div>
    <div className="text-xs ml-2">60%</div>
  </div>
);

const highUtilRows: HighUtilRow[] = [
  { Organization: "ABC Infrastructure Ltd", status: "Active", seatsUsed: "24/30", expiryDate: "14 Nov 2025", used: progress, billingStatus: "Paid", created: "31 Dec 2025" },
  { Organization: "NovaTech Solutions", status: "Trial", seatsUsed: "45/50", expiryDate: "28 Oct 2025", used: progress, billingStatus: "Overstock", created: "31 Dec 2025" },
  { Organization: "BluePeak Engineering", status: "Expired", seatsUsed: "8/10", expiryDate: "15 Sep 2025", used: progress, billingStatus: "Unpaid", created: "31 Dec 2025" },
  { Organization: "UrbanStack Enterprises", status: "Suspended", seatsUsed: "12/20", expiryDate: "22 Aug 2025", used: progress, billingStatus: "Critical", created: "31 Dec 2025" },
  { Organization: "Cornerstone Ltd", status: "Active", seatsUsed: "18/25", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Vertex Systems", status: "Active", seatsUsed: "10/20", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "OmniBuild Co", status: "Active", seatsUsed: "7/10", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "GreenField Works", status: "Active", seatsUsed: "15/30", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Summit Logistics", status: "Active", seatsUsed: "9/15", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "Pioneer Holdings", status: "Active", seatsUsed: "20/30", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Apex Manufacturing", status: "Active", seatsUsed: "11/20", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "NorthStar Solutions", status: "Active", seatsUsed: "14/20", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Silverline Corp", status: "Active", seatsUsed: "6/10", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "MetroWorks", status: "Active", seatsUsed: "13/25", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Blue Harbor", status: "Trial", seatsUsed: "3/5", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "Cobalt Energy", status: "Active", seatsUsed: "22/30", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Atlas Group", status: "Active", seatsUsed: "5/10", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "HarborTech", status: "Active", seatsUsed: "17/20", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Lumen Works", status: "Active", seatsUsed: "8/15", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Unpaid", created: "01 May 2024" },
  { Organization: "Brightside", status: "Suspended", seatsUsed: "0/10", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Critical", created: "01 May 2024" },
  { Organization: "CivicBuild", status: "Active", seatsUsed: "16/20", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Blue Ridge", status: "Active", seatsUsed: "19/25", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Paid", created: "01 May 2024" },
  { Organization: "Skyline Partners", status: "Trial", seatsUsed: "2/5", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Pending", created: "01 May 2024" },
  { Organization: "Harbour Industries", status: "Expired", seatsUsed: "0/0", expiryDate: "01 Dec 2025", used: progress, billingStatus: "Unpaid", created: "01 May 2024" },
];

export default highUtilRows;
