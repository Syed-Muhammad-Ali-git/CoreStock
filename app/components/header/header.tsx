"use client";

/* ---------------- IMPORTS ---------------- */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Group, TextInput, Avatar } from "@mantine/core";
import Image from "next/image";
import searchLogo from "../../assets/images/searchLogo.png";
import helpLogo from "../../assets/images/helpLogo.png";

/* ---------------- INTERFACES ---------------- */
interface HeaderProps {
  sidebarOpen?: boolean;
}

/* ---------------- COMPONENT ---------------- */
const Header: React.FC<HeaderProps> = ({ sidebarOpen = false }) => {
  const router = useRouter();
  const [profile, setProfile] = useState<string | null>(null);

  // ---------------- LOAD PROFILE IMAGE FROM LOCAL STORAGE ----------------
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        if (loginData.profileImage) {
          setProfile(loginData.profileImage);
        }
      }
    }
  }, []);

  const drawerWidth = 260;
  const collapsedWidth = 65;

  return (
    <div
      className="h-16 fixed top-0 right-0 z-50 bg-white flex items-center justify-between px-4 transition-all duration-200"
      style={{
        left: sidebarOpen ? drawerWidth : collapsedWidth,
      }}
    >
      {/* ---------------- SEARCH BAR ---------------- */}
      <Group className="flex-1">
        <TextInput
          placeholder="Search organizations or users..."
          leftSection={
            <Image
              src={searchLogo}
              alt="search"
              width={14}
              height={14}
              className="filter-search-icon"
            />
          }
          leftSectionWidth={30}
          className="w-full max-w-45 sm:max-w-60 md:max-w-75 lg:max-w-90"
          styles={{
            input: {
              color: "#4B5565",
            },
          }}
        />
      </Group>

      {/* ---------------- RIGHT CONTROLS ---------------- */}
      <Group gap={12}>
        {/* ---------------- HELP BUTTON ---------------- */}
        <Image
          src={helpLogo}
          alt="help"
          width={30}
          height={30}
          className="border border-[#EEF2F6] p-1.5 rounded-md cursor-pointer"
        />

        {/* ---------------- PROFILE AVATAR ---------------- */}
        <Avatar
          src={profile || undefined}
          alt="profile"
          radius="xl"
          className="cursor-pointer"
          onClick={() => router.push("/myAccount")}
        />
      </Group>
    </div>
  );
};

export default Header;
