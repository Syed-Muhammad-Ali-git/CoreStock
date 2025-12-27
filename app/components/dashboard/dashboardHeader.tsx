import React, { useEffect, useState } from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus.png";

const DashboardHeader = () => {
  const [time, setTime] = useState(() => new Date().toDateString());

  //   Get Month Date Day
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  useEffect(() => {
    setTime(formattedDate);
  }, [formattedDate]);

  const loginDataRaw: any = JSON.parse(localStorage.getItem("loginData"));

  return (
    <section className="bg-white rounded-xl py-4 px-5">
      <div className="font-normal text-[#667085] text-sm">{time}</div>

      <div className="flex justify-between flex-wrap gap-4">
        <div className="font-semibold text-2xl">
          Good Evening, {loginDataRaw.fullName}👋
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            className="border border-[#CDD5DF] p-2 rounded-lg text-[#364152]"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            View Expired
          </button>
          <button
            className="border border-[#CDD5DF] p-2 rounded-lg text-[#364152]"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            View All Organization
          </button>
          <button
            className="border border-[#FF8A3D] p-2 rounded-lg text-black bg-[#FF8A3D]"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            <Image
              src={plusIcon}
              alt="plus icon"
              className="size-5 inline-block mb-0.5 mr-1"
            />
            Create Organization
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
