"use client";

import React, { useState } from "react";
import Image from "next/image";
import deleteIcon from "../../assets/images/deleteIcon.png";

const NotesTab = () => {
  const [textAreaData, setTextAreaData] = useState("");

  const textAreaSubmit = () => {
    if (textAreaData != "") {
      console.log(textAreaData);
    }
  };

  return (
    <>
      {/* Notes header */}
      <div className="border-gray-100 border p-2 rounded-2xl">
        <h1 className="text-[#364152] font-medium">Notes</h1>
        <div>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 resize-none focus:outline-none h-35 my-3"
            placeholder="Add internal note..."
            value={textAreaData}
            onChange={(e) => setTextAreaData(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-[#FF8A3D] rounded-lg p-2.5 "
            style={{ fontWeight: "600" }}
            onClick={textAreaSubmit}
          >
            Save Note
          </button>
        </div>
      </div>

      <div className="mt-10 ml-2 mb-2 font-semibold">
        <h1>Notes</h1>
      </div>

      <div></div>
      {/* Notes notification */}
      <div>
        <ul className="flex flex-col gap-5 flex-wrap">
          <li className="flex justify-center items-center border-gray-100 border p-2 rounded-2xl">
            <div>
              <p className="font-semibold text-[#364152]">
                This is a sample note about the client&apos;s recent license
                renewal request. They are considering upgrading to the
                enterprise plan. Follow up next week.
              </p>
              <p className="text-[#697586] text-sm mt-2">
                By <span className="text-[#202939]">Samantha Lee</span> on Oct
                24,2023 at 10:45 AM
              </p>
            </div>
            <div className="min-w-10 h-auto flex justify-end cursor-pointer">
              <span className="flex justify-center items-center hover:bg-gray-200 rounded-2xl">
                <Image
                  src={deleteIcon}
                  alt="delete icon"
                  className="w-4.5 h-5"
                />
              </span>
            </div>
          </li>

          <li className="flex justify-center items-center border-gray-100 border p-2 rounded-2xl">
            <div>
              <p className="font-semibold text-[#364152]">
                This is a sample note about the client&apos;s recent license
                renewal request. They are considering upgrading to the
                enterprise plan. Follow up next week.
              </p>
              <p className="text-[#697586] text-sm mt-2">
                By <span className="text-[#202939]">Samantha Lee</span> on Oct
                24,2023 at 10:45 AM
              </p>
            </div>
            <div className="min-w-10 flex justify-end cursor-pointer">
              <span className="flex justify-center items-center hover:bg-gray-200 rounded-2xl">
                <Image
                  src={deleteIcon}
                  alt="delete icon"
                  className="w-4.5 h-5]"
                />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NotesTab;
