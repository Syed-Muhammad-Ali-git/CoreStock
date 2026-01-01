"use client";
import Image from "next/image";
import React, { useState } from "react";
import closeIcon from "../assets/images/closeIcon.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Props type
interface ChangeLicenceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeLicenceSeats: React.FC<ChangeLicenceProps> = ({
  isOpen,
  onClose,
}) => {
  const TOTAL_SEATS = 30;
  const USED_SEATS = 24;

  const [newSeats, setNewSeats] = useState<number>(TOTAL_SEATS);

  const handleSave = () => {
    if (newSeats < USED_SEATS) {
      toast.error(
        `Seats cannot be less than currently used seats (${USED_SEATS})`
      );
      return;
    }

    toast.success("Licence seats updated successfully!");
    console.log("New Seats:", newSeats);

    setTimeout(() => {
      onClose();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-[#202939] font-medium">
              Change Licence Seats
            </h2>
            <button onClick={onClose} className="cursor-pointer">
              <Image src={closeIcon} alt="close icon" />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4">
            <div>
              <h1 className="font-medium text-[16px]">Current Seats</h1>
              <p className="text-sm text-gray-600">
                {TOTAL_SEATS} seats total ({USED_SEATS} used)
              </p>
            </div>

            <div>
              <h1 className="font-medium mb-1 text-sm text-[#364152]">
                New Number of Seats
              </h1>
              <input
                type="number"
                min={USED_SEATS}
                value={newSeats}
                onChange={(e) => setNewSeats(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                Note: Cannot be less than currently used seats ({USED_SEATS})
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-6 gap-3 font-medium">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#FF8A3D] text-black rounded-lg cursor-pointer"
            >
              Update Seats
            </button>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default ChangeLicenceSeats;
