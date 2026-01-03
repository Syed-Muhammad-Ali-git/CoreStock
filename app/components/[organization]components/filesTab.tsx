"use client";

import React, { useState } from "react";
import { Select } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

import txtFileIcon from "../../assets/images/txtFileIcon.png";
import pdfFileIcon from "../../assets/images/pdffileIcon.png";
import docFileIcon from "../../assets/images/docFileIcon.png";
import cloudIcon from "../../assets/images/cloudIcon.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
import plusIcon from "../../assets/images/plusBlack.png";

interface UploadedFile {
  id: number;
  name: string;
  type: string;
  uploadedBy: string;
  uploadedAt: string;
  size: string;
}

const mockFiles: UploadedFile[] = [
  {
    id: 1,
    name: "Apex_Contract_2024.pdf",
    type: "Contract",
    uploadedBy: "J. Brown",
    uploadedAt: "31 Dec 2025",
    size: "200 KB",
  },
  {
    id: 2,
    name: "OrderForm_Q1_2024.docx",
    type: "Order Form",
    uploadedBy: "Sarah M",
    uploadedAt: "14 Nov 2025",
    size: "200 KB",
  },
  {
    id: 3,
    name: "Renewal_Notes.txt",
    type: "Other",
    uploadedBy: "Admin",
    uploadedAt: "28 Oct 2025",
    size: "200 KB",
  },
];

const FilesTab = () => {
  const [fileType, setFileType] = useState<string | null>("Contract");
  const [uploadedFiles] = useState<UploadedFile[]>(mockFiles);
  const [pendingFiles, setPendingFiles] = useState<FileWithPath[]>([]);

  const getFileIcon = (name: string) => {
    let icon = txtFileIcon;
    if (name.endsWith(".pdf")) icon = pdfFileIcon;
    else if (name.endsWith(".doc") || name.endsWith(".docx"))
      icon = docFileIcon;

    return <Image src={icon} alt="file" width={28} height={28} />;
  };

  return (
    <div className="bg-[#F9FAFB] border border-[#EEF2F6] rounded-2xl py-6 satoshi-font">
      <div className="max-w-275 mx-auto px-4 space-y-6">
        {/* ================= Upload Card ================= */}
        <div className="">
          <div className="space-y-4">
            {/* File Type */}
            <h1 className="text-[#364152] font-medium">File Type</h1>
            <Select
              value={fileType}
              onChange={setFileType}
              data={["Contract", "Order Form", "Invoice", "Other"]}
            />

            {/* Upload Label */}
            <p className="text-sm font-medium text-gray-700 mt-5">
              Upload Photos
            </p>

            {/* Dropzone */}
            <Dropzone
              onDrop={setPendingFiles}
              className="border border-dashed border-gray-300 rounded-md"
            >
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <IconUpload size={22} className="mb-1" />
                <p className="text-lg text-gray-700 font-medium">
                  Drag and drop here to upload
                </p>
                <p className="text-sm text-gray-400">
                  .png, .pdf, .jpg up to 50MB
                </p>
              </div>
            </Dropzone>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#FF8A3D] hover:bg-orange-600 px-4 py-2 rounded-md"
                style={{ fontWeight: "600" }}
              >
                Save File
              </button>
            </div>
          </div>
        </div>

        {/* ================= Uploaded Section ================= */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap mb-4 gap-2">
            <h2 className="text-xl font-semibold text-gray-800">Uploaded</h2>
            <button
              className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
              style={{ fontWeight: "600" }}
            >
              <Image src={plusIcon} alt="plus Icon" />
              Add Invoice Record
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-200 w-full text-sm">
              <thead className="bg-[#F9FAFB] text-gray-500">
                <tr>
                  <th className="text-left font-medium py-2 px-2">File Name</th>
                  <th className="text-left font-medium py-2 px-2">Type</th>
                  <th className="text-left font-medium py-2 px-2">
                    Uploaded By
                  </th>
                  <th className="text-left font-medium py-2 px-2">
                    Uploaded At
                  </th>
                  <th className="text-center font-medium py-2 px-2">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {uploadedFiles.map((file) => (
                  <tr key={file.id}>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.name)}
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-400">{file.size}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-2 text-gray-600">{file.type}</td>
                    <td className="py-3 px-2 text-gray-600">
                      {file.uploadedBy}
                    </td>
                    <td className="py-3 px-2 text-gray-600">
                      {file.uploadedAt}
                    </td>

                    <td>
                      <div className="flex items-center justify-center gap-3">
                        <button>
                          <Image src={cloudIcon} alt="download" width={32} />
                        </button>
                        <button>
                          <Image src={deleteIcon} alt="download" width={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesTab;
