import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import Image from "next/image";
import { InfoRow, Card } from "@/app/components/cardFunctions/cardFunction";

const CreateOrganization = () => {
  return (
    <div className="bg-[#F2F4F7] min-h-auto p-2 pb-4">
      {/* main heading */}
      <h1 className="pb-3 m-2 flex items-center gap-1">
        <span className="text-[#697586] font-medium">Organization</span>
        <span className="text-[#697586] font-extrabold inline-block">
          <IconChevronsRight size={20} stroke={2} />
        </span>
        <span className="text-[#FF8A3D] font-medium">Create Organization</span>
      </h1>

      {/* body content */}
      <div className="rounded-lg m-2.5">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Organization Detail */}
          <Card
            title="Organization Detail"
            className="border border-[#EEF2F6] h-full"
          >
            <InfoRow label="Name" value="ABC Infrastructure Ltd" />
            <InfoRow
              label="Status"
              value={
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  Active
                </span>
              }
            />
            <InfoRow label="Industry" value="Construction" />
            <InfoRow label="Created Date" value="15 Mar 2023" />
          </Card>

          {/* Subscription & Licensing */}
          <Card
            title="Subscription & Licensing"
            className="border border-[#EEF2F6] h-full"
          >
            <InfoRow label="Start Date" value="1 Jan 2024" />
            <InfoRow label="End/Renewal Date" value="31 Dec 2024" />
            <InfoRow label="Days Left" value="0 days left" />
            <InfoRow label="Plan" value="Pro" />
          </Card>

          {/* Billing Contact */}
          <Card
            title="Billing Contact"
            className="border border-[#EEF2F6] h-full"
          >
            <p className="text-sm mb-2">24 / 30 seats used</p>
            <div className="w-full bg-gray-200 rounded-full h-2 flex">
              <div className="bg-[#FE6511] h-2 rounded-full w-[80%]" />
              <p className="text-xs text-gray-500 -mt-7">80% utilisation</p>
            </div>
          </Card>

          {/* Initial Client Admin */}
          <Card
            title="Initial Client Admin"
            rightAction={
              <span className="text-[#C63508] font-medium text-sm cursor-pointer">
                Edit
              </span>
            }
            className="border border-[#EEF2F6] h-full"
          >
            <p className="text-sm text-gray-500">Norizz</p>
            <p className="text-sm text-gray-500">example@gmail.com</p>
            <p className="text-sm text-gray-500">+44 1234 567890</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganization;
