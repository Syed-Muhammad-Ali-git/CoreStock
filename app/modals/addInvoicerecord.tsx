"use client";
import Image from "next/image";
import React, { useState } from "react";
import closeIcon from "../assets/images/closeIcon.png";
import { Grid, NumberInput, Select } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddInvoiceRecordProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  invoiceNumber: string;
  amount: number | string;
  currency: string;
  date: string; // Invoice Date
  periodStart: string;
  periodEnd: string;
  status: string;
}

const AddInvoiceRecord: React.FC<AddInvoiceRecordProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    invoiceNumber: "",
    amount: "",
    currency: "£",
    date: "",
    periodStart: "",
    periodEnd: "",
    status: "Paid",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (field: "amount", value: string | number) => {
    if (value === "") {
      setFormData((prev) => ({ ...prev, [field]: "" }));
    } else if (typeof value === "number") {
      setFormData((prev) => ({ ...prev, [field]: value }));
    } else {
      const numValue = Number(value);
      setFormData((prev) => ({ ...prev, [field]: isNaN(numValue) ? "" : numValue }));
    }
  };

  const handleSelectChange = (field: "status", value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  };

  const handleSave = () => {
    if (!formData.invoiceNumber || !formData.amount) {
      toast.error("Please fill all required fields.");
      return;
    }
    console.log("Form Data:", formData);
    toast.success("Invoice record saved!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black/40 flex items-center justify-center z-1300 p-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Outer modal with border-radius */}
      <div className="bg-white rounded-xl w-full max-w-lg shadow-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center m-4">
          <h2 className="text-2xl text-[#202939] font-medium">
            Add Invoice Record
          </h2>
          <button onClick={onClose} className="ml-2">
            <Image src={closeIcon} alt="close icon" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-5 sm:p-6 overflow-auto">
          {/* Body */}
          <div className="space-y-4">
            {/* Invoice Number */}
            <div>
              <label className="block text-sm mb-1 text-[#364152]">
                Invoice #
              </label>
              <input
                type="text"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="INV-2301"
              />
            </div>

            {/* Amount + Currency */}
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <NumberInput
                  label="Amount"
                  placeholder="4200"
                  value={formData.amount}
                  onChange={(value) => handleNumberChange("amount", value)}
                  labelProps={{ style: { marginBottom: "6px" } }}
                  radius={8}
                  min={0}
                  className="w-full"
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6 }}>
                <label className="text-sm text-[#364152] mt-1 block">
                  Currency
                </label>
                <input
                  type="text"
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </Grid.Col>
            </Grid>

            {/* Invoice Date */}
            <div>
              <label className="block text-sm mb-1 text-[#364152]">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Period Start + End */}
            <Grid gutter="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <label className="block text-sm mb-1 text-[#364152]">
                  Period Start
                </label>
                <input
                  type="date"
                  name="periodStart"
                  value={formData.periodStart}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, sm: 6 }}>
                <label className="block text-sm mb-1 text-[#364152]">
                  Period End
                </label>
                <input
                  type="date"
                  name="periodEnd"
                  value={formData.periodEnd}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </Grid.Col>
            </Grid>

            {/* Status */}
            <div>
              <Select
                label="Status"
                placeholder="Select Status"
                data={["Paid", "Unpaid", "Pending"]}
                value={formData.status}
                onChange={(value) => handleSelectChange("status", value)}
                labelProps={{ style: { marginBottom: "6px" } }}
                radius={8}
              />
            </div>
          </div>
        </div>

        {/* Footer - always visible */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 font-medium p-5 sm:p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#FF8A3D] text-black hover:bg-orange-600 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInvoiceRecord;
