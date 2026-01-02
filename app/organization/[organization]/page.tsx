"use client";

import React, { useState } from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import editBlackIcon from "../../assets/images/editBlack.png";
import changeBlackIcon from "../../assets/images/changeBlack.png";
import Image from "next/image";
import { OrganizationNameMenu } from "@/app/components/actionMenu/actionMenu";
import EdifOrganization from "../../modals/editOrganization";
import ChangeLicence from "../../modals/changeLicenceSeats";
import OverviewTab from "@/app/components/[organization]components/overviewTab";
import FilesTab from "@/app/components/[organization]components/filesTab";
import NotesTab from "@/app/components/[organization]components/notesTab";
import BillingTab from "@/app/components/[organization]components/billingTab";
import UsersTab from "@/app/components/[organization]components/usersTab";

const TableData = () => {
  const [isOpenBillingContact, setisOpenBillingContact] = useState(false);
  const [isOpenOrganization, setisOpenOrganization] = useState(false);
  const [isOpenChangeLicence, setisOpenChangeLicence] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const openBillingModal = () => setisOpenBillingContact(true);
  const closeBillingModal = () => setisOpenBillingContact(false);

  const openOrganizationModal = () => setisOpenOrganization(true);
  const closeOrganizationModal = () => setisOpenOrganization(false);

  const openChangeLicenceModal = () => setisOpenChangeLicence(true);
  const closeChangeLicenceModal = () => setisOpenChangeLicence(false);

  const renderTabContent = (activeTab: string) => {
    switch (activeTab) {
      case "Overview":
        return (
          <OverviewTab
            openBillingModal={openBillingModal}
            isOpenBillingContact={isOpenBillingContact}
            closeBillingModal={closeBillingModal}
          />
        );

      case "Files":
        return <FilesTab />;
      case "Notes":
        return <NotesTab />;
      case "Billing":
        return <BillingTab />;
      case "Users":
        return <UsersTab />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F2F4F7] p-1 pb-4">
      {/* main heading */}
      <h1 className="pb-3 m-2 flex items-center gap-1">
        <span className="text-[#697586] font-medium">Organization</span>
        <span className="text-[#697586] font-extrabold inline-block">
          <IconChevronsRight size={20} stroke={2} />
        </span>
        <span className="text-[#FF8A3D] font-medium">ABC</span>
      </h1>

      {/* body content */}
      <div className="bg-white rounded-lg p-5 m-1 sm:m-2.5">
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#364152] border border-[#CDD5DF] cursor-pointer"
              style={{ fontWeight: 600, fontSize: "16px" }}
              onClick={openOrganizationModal}
            >
              <Image src={editBlackIcon} alt="edit" />
              <span className="hidden sm:block">Edit</span>
            </button>
            <EdifOrganization
              isOpen={isOpenOrganization}
              onClose={closeOrganizationModal}
            />

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#364152] border border-[#CDD5DF] cursor-pointer"
              style={{ fontWeight: 600, fontSize: "16px" }}
              onClick={openChangeLicenceModal}
            >
              <Image src={changeBlackIcon} alt="change" />
              <span className="hidden sm:block">Change Licence Seats</span>
            </button>
            <ChangeLicence
              isOpen={isOpenChangeLicence}
              onClose={closeChangeLicenceModal}
            />

            <div className="flex items-center rounded-lg border border-[#CDD5DF]">
              <OrganizationNameMenu />
            </div>
          </div>
        </div>

        {/* Tab btns */}
        <div className="flex gap-3  mb-6 text-sm border border-[#EEF2F6] bg-[#FCFCFD] p-2 rounded-lg  overflow-auto">
          <button
            className={`flex items-center p-2 rounded-lg font-manrope cursor-pointer ${
              activeTab === "Overview"
                ? "border border-[#FF8A3D] text-black bg-[#FF8A3D]"
                : "text-gray-500"
            }`}
            style={{ fontSize: "14px", fontWeight: "600" }}
            onClick={() => setActiveTab("Overview")}
          >
            Over view
          </button>
          <button
            className={`flex items-center p-2 rounded-lg font-manrope cursor-pointer ${
              activeTab === "Users"
                ? "border border-[#FF8A3D] text-black bg-[#FF8A3D]"
                : "text-gray-500"
            }`}
            style={{ fontSize: "14px", fontWeight: "600" }}
            onClick={() => setActiveTab("Users")}
          >
            Users
          </button>
          <button
            className={`flex items-center p-2 rounded-lg font-manrope cursor-pointer ${
              activeTab === "Billing"
                ? "border border-[#FF8A3D] text-black bg-[#FF8A3D]"
                : "text-gray-500"
            }`}
            style={{ fontSize: "14px", fontWeight: "600" }}
            onClick={() => setActiveTab("Billing")}
          >
            Billing
          </button>
          <button
            className={`flex items-center p-2 rounded-lg font-manrope cursor-pointer ${
              activeTab === "Notes"
                ? "border border-[#FF8A3D] text-black bg-[#FF8A3D]"
                : "text-gray-500"
            }`}
            style={{ fontSize: "14px", fontWeight: "600" }}
            onClick={() => setActiveTab("Notes")}
          >
            Notes
          </button>
          <button
            className={`flex items-center p-2 rounded-lg font-manrope cursor-pointer ${
              activeTab === "Files"
                ? "border border-[#FF8A3D] text-black bg-[#FF8A3D]"
                : "text-gray-500"
            }`}
            style={{ fontSize: "14px", fontWeight: "600" }}
            onClick={() => setActiveTab("Files")}
          >
            Files
          </button>
        </div>

        {/* Content Area */}

        {renderTabContent(activeTab)}
      </div>
    </div>
  );
};

export default TableData;
