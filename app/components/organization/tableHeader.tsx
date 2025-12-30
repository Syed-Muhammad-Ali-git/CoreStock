import React from "react";
import { Group, TextInput, Button, Menu } from "@mantine/core";
import Image from "next/image";
import searchLogo from "../../assets/images/searchLogo.png";
import { IconChevronDown } from "@tabler/icons-react";

const OrganizationTableHeader = () => {
  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #E5E7EB",
        background: "#fff",
      }}
      className="satoshi-font"
    >
      {/* Search */}
      <TextInput
        placeholder="Search"
        leftSection={
          <Image src={searchLogo} alt="search" width={16} height={16} />
        }
        leftSectionWidth={30}
        styles={{
          input: {
            width: 260,
            color: "#4B5565",
            borderRadius: "8px",
          },
        }}
      />

      {/* Right Controls */}
      <Group gap="sm">
        <label
          htmlFor="expire_in_30_days"
          style={{
            display: "flex",
            alignItems: "center",
            color: "#4B5565",
            padding: "5px",
          }}
        >
          <input
            type="checkbox"
            name="expire_in_30_days"
            id="expire_in_30_days"
            style={{
              marginRight: "7px",
              width: "15px",
              height: "15px",
            }}
          />
          <span style={{ fontSize: "14px" }}>
            Only expiring in next 30 days
          </span>
        </label>

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
              Status
            </Button>
          </Menu.Target>

          <Menu.Dropdown
            style={{
              width: "120px",
              borderRadius: "10px",
              fontFamily: "Satoshi",
            }}
          >
            <Menu.Item color="#087442">• Active</Menu.Item>
            <Menu.Item color="#C63508">• Trial</Menu.Item>
            <Menu.Item color="#B6271F">• Expired</Menu.Item>
            <Menu.Item color="#4432D0">• Suspended</Menu.Item>
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
              Expiry
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
              Sort
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
  );
};

export default OrganizationTableHeader;
