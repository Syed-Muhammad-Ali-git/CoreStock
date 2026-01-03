"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import closeIcon from "../assets/images/closeIcon.png";
import { Grid, Select } from "@mantine/core";

interface EditUserProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userRole?: string;
  userEmail?: string;
  userStatus?: string;
}

interface FormData {
  name: string;
  role: string;
  email: string;
  status: string;
}

const EditUser: React.FC<EditUserProps> = ({
  isOpen,
  onClose,
  userName = "",
  userRole = "Manager",
  userEmail = "",
  userStatus = "Active",
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: userName,
    role: userRole,
    email: userEmail,
    status: userStatus,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: userName,
        role: userRole,
        email: userEmail,
        status: userStatus,
      });
    }
  }, [isOpen, userName, userRole, userEmail, userStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (
    field: "role" | "status",
    value: string | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  };

  const handleSave = () => {
    console.log("Updated User Data:", formData);
    toast.success(`User "${formData.name}" updated successfully!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-[#202939] font-medium">Edit User</h2>
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
              User Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Doe"
            />
          </div>

          <Grid gutter="md" className="text-[#364152] text-sm font-medium">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                label="Role"
                placeholder="Select role"
                data={["Admin", "Manager", "Storekeeper", "Electrical"]}
                value={formData.role}
                onChange={(value) => handleSelectChange("role", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                label="Status"
                placeholder="Select status"
                data={["Active", "Trial", "Expired", "Suspended"]}
                value={formData.status}
                onChange={(value) => handleSelectChange("status", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </Grid.Col>
          </Grid>

          <div>
            <label className="block text-sm mb-1 text-[#364152]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="user@example.com"
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

export default EditUser;
