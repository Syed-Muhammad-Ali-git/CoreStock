import React, { useEffect, useState } from "react";
import Image from "next/image";
import plusIcon from "../../assets/images/plus.png";

const DashboardHeader = () => {
  const [time, setTime] = useState("");
  const [loginData, setLoginData] = useState<{ fullName: string } | null>(null);

  useEffect(() => {
    // Set formatted date
    const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setTime(date);

    // Get login data safely from localStorage
    const data = localStorage.getItem("loginData");
    if (data) setLoginData(JSON.parse(data));
  }, []);

  return (
    <section className="bg-white rounded-xl py-4 px-5 my-4 manrope-font">
      {/* Date */}
      <div className="font-normal text-[#667085] text-sm">{time}</div>

      {/* Greeting and buttons */}
      <div className="flex justify-between flex-wrap gap-4 mt-2 mb-3">
        {/* Greeting */}
        <div className="font-semibold text-2xl">
          Good Evening, {loginData?.fullName || "User"} 👋
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 md:gap-4 flex-wrap">
          <button className="border border-[#CDD5DF] p-2 rounded-lg text-[#364152] text-[14px] font-medium">
            View Expired
          </button>
          <button className="border border-[#CDD5DF] p-2 rounded-lg text-[#364152] text-[14px] font-medium">
            View All Organization
          </button>
          <button className="flex items-center border border-[#FF8A3D] p-2 rounded-lg text-black bg-[#FF8A3D] text-[14px] font-medium">
            <Image src={plusIcon} alt="plus icon" className="w-5 h-5 mr-1" />
            Create Organization
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
