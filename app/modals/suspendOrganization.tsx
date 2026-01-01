"use client";
import React from "react";
import Image from "next/image";
import closeIcon from "../assets/images/closeIcon.png";
import redCloseIcon from "../assets/images/redCloseIcon.png";

// Props type
interface SuspendProps {
  isOpen: boolean;
  onClose: () => void;
  organizationName?: string;
}

const SuspendOrganisationModal: React.FC<SuspendProps> = ({
  isOpen,
  onClose,
  organizationName = "ABC Infrastructure Ltd",
}) => {
  const handleConfirm = () => {
    console.log("Organisation Suspended");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <Image src={closeIcon} alt="close icon" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mt-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100">
            <Image src={redCloseIcon} alt="warning icon" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-6 space-y-2">
          <h2 className="text-xl font-semibold text-[#202939]">
            Suspend Organisation
          </h2>
          <p className="text-sm text-[#667085]">
            Are you sure you want to suspend
            <span className="font-medium">{organizationName}</span>?
          </p>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 rounded-md bg-[#FF8A3D] text-black hover:bg-orange-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuspendOrganisationModal;
