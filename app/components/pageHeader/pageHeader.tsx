import React from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus.png";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  showButton: boolean;
}

const PageHeader = ({ title, subtitle, showButton }: PageHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="font-medium text-[#202939] text-2xl pb-2">{title}</h1>
        <h1 className="font-medium text-sm text-[#697586]">{subtitle}</h1>
      </div>
      {showButton && (
        <div>
          <button
            className="flex items-center border border-[#FF8A3D] p-2 rounded-lg text-black bg-[#FF8A3D] manrope-font"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            <Image src={plusIcon} alt="plus icon" className="w-5 h-5 mr-1" />
            Create Organization
          </button>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
