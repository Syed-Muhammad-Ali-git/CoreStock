"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Group, TextInput, Avatar } from "@mantine/core";
import Image from "next/image";
import searchLogo from "../../assets/images/searchLogo.png";
import helpLogo from "../../assets/images/helpLogo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { colors } from "@mui/material";

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
      className={
        "h-16 flex items-center justify-between px-4 fixed top-0 right-0 z-1400 bg-white transition-[left] duration-200 ease-[cubic-bezier(0.4,0,0.6,1)]"
      }
      style={{
        left: sidebarOpen ? drawerWidth : collapsedWidth,
      }}
    >
      <Group>
        <TextInput
          className="w-60"
          placeholder="Search organizations or users..."
          leftSection={<Image src={searchLogo} alt={"search logo"} />}
          leftSectionWidth={30}
        />
      </Group>

      <Group>
        <Image
          src={helpLogo}
          alt={"helpLogo"}
          width={30}
          height={30}
          style={{
            border: "1px solid #EEF2F6",
            padding: "6px",
            borderRadius: "6px",
          }}
        />
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
