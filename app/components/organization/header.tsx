import React from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus.png";

const OrganizationHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="font-medium text-[#202939] text-2xl pb-2">
          Organizations
        </h1>
        <h1 className="font-medium text-sm text-[#697586]">
          Your complete overview of every organization in CoreStock.
        </h1>
      </div>
      <div>
        <button
          className="border border-[#FF8A3D] p-2 rounded-lg text-black bg-[#FF8A3D]"
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          <Image
            src={plusIcon}
            alt="plus icon"
            className="size-5 inline-block mb-0.5 mr-1"
          />
          Create Organization
        </button>
      </div>
    </div>
  );
};

export default OrganizationHeader;
