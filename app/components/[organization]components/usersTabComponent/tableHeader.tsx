"use client";

import React from "react";
import Image from "next/image";
import { Group, TextInput, Button, Menu } from "@mantine/core";
import searchLogo from "../../../assets/images/searchLogo.png";
import { IconChevronDown } from "@tabler/icons-react";

interface PageHeaderProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  showSearch?: boolean;
}

const UserTableHeader = ({
  searchQuery,
  setSearchQuery,
  showSearch,
}: PageHeaderProps) => {
  return (
    <>
      {showSearch && (
        <div
          style={{
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E5E7EB",
            background: "#fff",
            flexWrap: "wrap",
            gap: "12px",
          }}
          className="satoshi-font"
        >
          {/* Search */}
          <TextInput
            placeholder="Search"
            leftSection={<Image src={searchLogo} alt="search" />}
            leftSectionWidth={30}
            styles={{
              root: {
                width: "100%",
                maxWidth: "260px",
                flexShrink: "1",
              },
              input: {
                width: "100%",
                color: "#4B5565",
                borderRadius: "8px",
              },
            }}
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery && setSearchQuery(event.currentTarget.value)
            }
          />

          {/* Right Controls */}
          <Group gap="sm" style={{ flexWrap: "wrap" }}>
            <Menu shadow="md" width={100}>
              <Menu.Target>
                <Button
                  rightSection={<IconChevronDown size={20} />}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid #E6E6E9",
                    borderRadius: "10px",
                  }}
                >
                  Filters
                </Button>
              </Menu.Target>

              <Menu.Dropdown
                style={{
                  width: "170px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontFamily: "Satoshi",
                }}
              >
                <Menu.Item color="#697586">Next 7 days</Menu.Item>
                <Menu.Item color="#697586">Next 30 days</Menu.Item>
                <Menu.Item color="#697586">Next 60 days</Menu.Item>
                <Menu.Item color="#697586">Custom date range</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Menu shadow="md" width={100}>
              <Menu.Target>
                <Button
                  rightSection={<IconChevronDown size={20} />}
                  style={{
                    fontWeight: "500",
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid #E6E6E9",
                    borderRadius: "10px",
                  }}
                >
                  Sort by
                </Button>
              </Menu.Target>
              <Menu.Dropdown
                style={{
                  width: "170px",
                  borderRadius: "10px",
                  fontWeight: "500",
                  fontFamily: "Satoshi",
                }}
              >
                <Menu.Item color="#697586">Name A-Z</Menu.Item>
                <Menu.Item color="#697586">Name Z-A</Menu.Item>
                <Menu.Item color="#697586">Seats Used %</Menu.Item>
                <Menu.Item color="#697586">Renewal date</Menu.Item>
                <Menu.Item color="#697586">Created date</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      )}
    </>
  );
};

export default UserTableHeader;
