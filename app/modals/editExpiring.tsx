"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import closeIcon from "../assets/images/closeIcon.png";
import { Grid, Select } from "@mantine/core";

interface EditExpiringProps {
  isOpen: boolean;
  onClose: () => void;
  orgName?: string;
  seatsUsed?: string;
  expiryDate?: string;
  billingStatus?: string;
}

interface FormData {
  orgName: string;
  seatsUsed: string;
  expiryDate: string;
  billingStatus: string;
}

const EditExpiring: React.FC<EditExpiringProps> = ({
  isOpen,
  onClose,
  orgName = "",
  seatsUsed = "",
  expiryDate = "",
  billingStatus = "Paid",
}) => {
  const [formData, setFormData] = useState<FormData>({
    orgName,
    seatsUsed,
    expiryDate,
    billingStatus,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({ orgName, seatsUsed, expiryDate, billingStatus });
    }
  }, [isOpen, orgName, seatsUsed, expiryDate, billingStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (
    field: "billingStatus",
    value: string | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  };

  const handleSave = () => {
    console.log("Updated Expiring Data:", formData);
    toast.success(`"${formData.orgName}" updated successfully!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-[#202939] font-medium">
            Edit Expiring Organization
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            onClick={onClose}
          >
            <Image src={closeIcon} alt="close icon" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-[#364152]">
              Organization Name
            </label>
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Organization Name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#364152]">
              Seats Used
            </label>
            <input
              type="text"
              name="seatsUsed"
              value={formData.seatsUsed}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., 24/30"
            />
          </div>

          <Grid gutter="md" className="text-[#364152] text-sm font-medium">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <label className="block text-sm mb-1 text-[#364152]">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="14 Nov 2025"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                label="Billing Status"
                placeholder="Select status"
                data={["Paid", "Pending", "Unpaid", "Critical", "Overstock"]}
                value={formData.billingStatus}
                onChange={(value) => handleSelectChange("billingStatus", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </Grid.Col>
          </Grid>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end mt-6 gap-3 font-medium">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#FF8A3D] text-black hover:bg-orange-600 rounded-lg cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpiring;
