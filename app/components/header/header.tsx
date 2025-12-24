"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Group, TextInput, Avatar } from "@mantine/core";
import searchLogo from "../../assets/images/searchLogo.png";
import helpLogo from "../../assets/images/helpLogo.png";

interface HeaderProps {
  sidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen = false }) => {
  const router = useRouter();
  const [profile, setProfile] = useState<string | null>(null);

  React.useEffect(() => {
    const profileImage = localStorage.getItem("profileImage");
    if (profileImage) {
      setProfile(profileImage);
    }
  }, []);

  const drawerWidth = 260;
  const collapsedWidth = 65;

  return (
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        position: "fixed",
        left: sidebarOpen ? drawerWidth : collapsedWidth,
        right: 0,
        top: 0,
        zIndex: 1400,
        background: "white",
        borderBottom: "1px solid #e0e0e0",
        transition: "left 225ms cubic-bezier(0.4, 0, 0.6, 1)",
      }}
    >
      <Group className="border-#EAECF0">
        {/* <Image src={searchLogo} alt={"search logo"} /> */}

        <TextInput
          className="w-60  border-[#EAECF0] text-[#4B5565] "
          placeholder="Search organizations or users..."
        />
      </Group>

      <Group>
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
