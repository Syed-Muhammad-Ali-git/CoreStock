"use client";
import Image from "next/image";
import React, { useState } from "react";
import closeIcon from "../assets/images/closeIcon.png";
import { Grid, Select } from "@mantine/core";

// Props type
interface EdifOrganizationProps {
  isOpen: boolean;
  onClose: () => void;
}

// Form data type
interface FormData {
  name: string;
  industry: string;
  status: string;
  phone: string;
}

const EdifOrganization: React.FC<EdifOrganizationProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    industry: "",
    status: "",
    phone: "",
  });

  // 👇 same as your input logic
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 👇 ONLY for Select (logic fix)
  const handleSelectChange = (
    field: "industry" | "status",
    value: string | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-[#202939] font-medium">
            Edit Organization
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
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="ABC Infrastructure Ltd"
            />
          </div>

          <Grid gutter="md" className="text-[#364152] text-sm font-medium">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                label="Industry"
                placeholder="Select industry"
                data={["Civil Engineering", "Construction", "IT"]}
                value={formData.industry}
                onChange={(value) => handleSelectChange("industry", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                label="Status"
                placeholder="Select industry"
                data={["Civil Engineering", "Construction", "IT"]}
                value={formData.status}
                onChange={(value) => handleSelectChange("status", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </Grid.Col>
          </Grid>

          <div>
            <label className="block text-sm mb-1 text-[#364152]">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Standard"
            />
          </div>
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

export default EdifOrganization;
