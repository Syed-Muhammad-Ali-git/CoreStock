"use client";

import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import editBlackIcon from "../../assets/images/editBlack.png";
import changeBlackIcon from "../../assets/images/changeBlack.png";
import Image from "next/image";
import { OrganizationNameMenu } from "@/app/components/actionMenu/actionMenu";
import profileIcon from "../../assets/images/profileBlack.png";
import mailIcon from "../../assets/images/mailBlack.png";
import phoneIcon from "../../assets/images/phoneBlack.png";
import { InfoRow, Card } from "@/app/components/cardFunctions/cardFunction";

const TableData = () => {
  return (
    <div className="bg-[#F2F4F7] p-2 pb-4">
      {/* main heading */}
      <h1 className="pb-3 m-2 flex items-center gap-1">
        <span className="text-[#697586] font-medium">Organization</span>
        <span className="text-[#697586] font-extrabold inline-block">
          <IconChevronsRight size={20} stroke={2} />
        </span>
        <span className="text-[#FF8A3D] font-medium">ABC</span>
      </h1>

      {/* body content */}
      <div className="bg-white rounded-lg p-5 m-2.5">
        {/* Header */}
        <div className="flex flex-wrap justify-between mb-6 gap-4">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-xl font-semibold flex flex-wrap items-center gap-2">
              <span>ABC Infrastructure Ltd</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                Active
              </span>
            </h1>

            <p className="text-sm text-gray-500">
              1 Jan 2024 - 31 Dec 2024 · 24 / 30 seats used
            </p>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex flex-wrap gap-2">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#364152] border border-[#CDD5DF]"
              style={{ fontWeight: 600, fontSize: "16px" }}
            >
              <Image src={editBlackIcon} alt="edit" />
              <span className="hidden sm:block">Edit</span>
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#364152] border border-[#CDD5DF]"
              style={{ fontWeight: 600, fontSize: "16px" }}
            >
              <Image src={changeBlackIcon} alt="change" />
              <span className="hidden sm:block">Change Licence Seats</span>
            </button>

            <div className="flex items-center rounded-lg border border-[#CDD5DF]">
              <OrganizationNameMenu />
            </div>
          </div>
        </div>

        {/* Tab btns */}
        <div className="flex gap-3  mb-6 text-sm border border-[#EEF2F6] bg-[#FCFCFD] p-2 rounded-lg  overflow-auto">
          <button
            className="flex items-center border border-[#FF8A3D] p-2 rounded-lg text-black bg-[#FF8A3D] manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Over view
          </button>
          <button
            className="flex items-center p-2 rounded-lg text-gray-500 manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Users
          </button>
          <button
            className="flex items-center p-2 rounded-lg text-gray-500 manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Billing
          </button>
          <button
            className="flex items-center p-2 rounded-lg text-gray-500 manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Notes
          </button>
          <button
            className="flex items-center p-2 rounded-lg text-gray-500 manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            Files
          </button>
        </div>

        {/* Cards */}
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
              <span className="text-[#C63508] font-medium text-sm cursor-pointer">
                Edit
              </span>
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
        </div>
      </div>
    </div>
  );
};

export default TableData;
