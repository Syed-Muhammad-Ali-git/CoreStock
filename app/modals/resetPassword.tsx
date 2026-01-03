"use client";
import Image from "next/image";
import React, { useState } from "react";
import closeIcon from "../assets/images/closeIcon.png";
import { PasswordInput } from "@mantine/core";
import { ResetPasswordModalType } from "../types";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<ResetPasswordModalType>({
    password: "",
    confirmPassword: "",
  });

  const passwordsMatch = formData.password === formData.confirmPassword;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (!passwordsMatch) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setFormData({ password: "", confirmPassword: "" });

    console.log("Form Data:", formData);

    toast.success("Password changed successfully", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });

    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay satoshi-font">
        <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-[#202939] font-medium">
              Reset Password
            </h2>
            <button onClick={onClose}>
              <Image src={closeIcon} alt="close icon" />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4 py-5">
            <PasswordInput
              label="New Password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              styles={{
                label: { color: "#364152" },
              }}
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Enter password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={
                formData.confirmPassword &&
                !passwordsMatch &&
                "Passwords do not match"
              }
              styles={{
                label: { color: "#364152" },
              }}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-6 gap-3 font-medium">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={!passwordsMatch || !formData.password}
              className="px-4 py-2 bg-[#FF8A3D] text-black rounded-lg disabled:opacity-50"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default ResetPasswordModal;
