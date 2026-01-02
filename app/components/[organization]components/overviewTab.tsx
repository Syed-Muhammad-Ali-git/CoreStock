import React, { FC } from "react";
import profileIcon from "../../assets/images/profileBlack.png";
import mailIcon from "../../assets/images/mailBlack.png";
import phoneIcon from "../../assets/images/phoneBlack.png";
import { InfoRow, Card } from "@/app/components/cardFunctions/cardFunction";
import EditBillingModal from "../../modals/editBillingContact";
import Image from "next/image";

interface OverviewTabProps {
  openBillingModal: () => void;
  isOpenBillingContact: boolean;
  closeBillingModal: () => void;
}

const OverviewTab: FC<OverviewTabProps> = ({
  openBillingModal,
  isOpenBillingContact,
  closeBillingModal,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Organization Info */}
        <Card
          title="Organization Info"
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

        {/* Subscription */}
        <Card title="Subscription" className="border border-[#EEF2F6] h-full">
          <InfoRow label="Start Date" value="1 Jan 2024" />
          <InfoRow label="End/Renewal Date" value="31 Dec 2024" />
          <InfoRow label="Days Left" value="0 days left" />
          <InfoRow label="Plan" value="Pro" />
        </Card>

        {/* Licence & Users */}
        <Card
          title="Licence & Users"
          className="border border-[#EEF2F6] h-full"
        >
          <p className="text-sm mb-2">24 / 30 seats used</p>
          <div className="w-full bg-gray-200 rounded-full h-2 flex">
            <div className="bg-[#FE6511] h-2 rounded-full w-[80%]" />
            <p className="text-xs text-gray-500 -mt-7">80% utilisation</p>
          </div>
        </Card>

        {/* Billing Contact */}
        <Card
          title="Billing Contact"
          rightAction={
            <>
              <button
                className="text-[#C63508] font-medium text-sm cursor-pointer"
                onClick={openBillingModal}
              >
                Edit
              </button>
              <EditBillingModal
                isOpen={isOpenBillingContact}
                onClose={closeBillingModal}
              />
            </>
          }
          className="border border-[#EEF2F6] h-full"
        >
          <p className="text-sm text-gray-500">
            <Image
              src={profileIcon}
              alt="profile icon"
              className="inline-block mr-4"
            />
            Norizz
          </p>
          <p className="text-sm text-gray-500">
            <Image
              src={mailIcon}
              alt="mail icon"
              className="inline-block mr-4"
            />
            example@gmail.com
          </p>
          <p className="text-sm text-gray-500">
            <Image
              src={phoneIcon}
              alt="phone icon"
              className="inline-block mr-4"
            />
            +44 1234 567890
          </p>
        </Card>
      </div>{" "}
    </>
  );
};

export default OverviewTab;
