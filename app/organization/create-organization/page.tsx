"use client";

import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import { Card, TextInput, Select, NumberInput, Grid } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

const CreateOrganization = () => {
  return (
    <div className="bg-[#F2F4F7] min-h-screen p-2 sm:p-4 pb-6">
      {/* main heading */}
      <h1 className="pb-3 m-2 flex flex-wrap items-center gap-1 text-sm sm:text-base">
        <span className="text-[#697586] font-medium">Organization</span>
        <IconChevronsRight size={18} stroke={2} className="text-[#697586]" />
        <span className="text-[#FF8A3D] font-medium">Create Organization</span>
      </h1>

      {/* body content */}
      <div className="rounded-lg m-2 sm:m-3">
        <Grid gutter="lg">
          {/* Organization Detail */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-lg text-[#202939] font-medium mb-4">
                Organization Detail
              </h3>

              <Grid gutter="md" className="text-[#364152] text-sm font-medium">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Organisation Name"
                    placeholder="Apex Tunnelling Ltd"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Industry"
                    placeholder="Select industry"
                    data={["Civil Engineering", "Construction", "IT"]}
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Type"
                    placeholder="Select type"
                    data={[
                      "Contractor",
                      "Plant hire company",
                      "Asset owner",
                      "Manufacturer / supplier",
                      "JV / alliance",
                      "other",
                    ]}
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Headquarters Address"
                    placeholder="Enter Address"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Subscription & Licensing */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              withBorder
              radius="md"
              p="md"
              style={{ position: "relative", zIndex: 1 }}
            >
              <h3 className="text-lg text-[#202939] font-medium mb-4">
                Subscription & Licensing
              </h3>

              <Grid gutter="md" className="text-[#364152] text-sm font-medium">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Status"
                    data={["Active", "Expired", "Suspended"]}
                    defaultValue="Active"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    styles={{
                      option: {
                        color: "#697586",
                      },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <NumberInput
                    label="Licence Seats (Max Users)"
                    placeholder="25"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <DatePickerInput
                    label="Subscription Start Date"
                    placeholder="Jan 01 2025"
                    dropdownType="popover"
                    popoverProps={{
                      withinPortal: true,
                      zIndex: 10000,
                      position: "bottom-start",
                      shadow: "md",
                    }}
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <DatePickerInput
                    label="Subscription End/Renewal"
                    placeholder="Dec 31 2025"
                    dropdownType="popover"
                    popoverProps={{
                      withinPortal: true,
                      zIndex: 10000,
                      position: "bottom-start",
                      shadow: "md",
                    }}
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Billing Contact */}
          <Grid.Col span={6}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-lg text-[#202939] font-medium mb-4">
                Billing Contact
              </h3>

              <Grid gutter="md" className="text-[#364152] text-sm font-medium">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="First Name"
                    placeholder="Noraiz"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Last Name"
                    placeholder="Shahid"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Phone Number"
                    placeholder="+44 1234 567890"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Email Address"
                    placeholder="billing@apex.co.uk"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Initial Client Admin */}
          <Grid.Col span={6}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-lg text-[#202939] font-medium mb-4">
                Initial Client Admin
              </h3>

              <Grid gutter="md" className="text-[#364152] text-sm font-medium">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="First Name"
                    placeholder="Noraiz"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Last Name"
                    placeholder="Shahid"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={12}>
                  <TextInput
                    label="Admin Email"
                    placeholder="john.doe@apex.co.uk"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Client point of contact */}

          <Grid.Col span={12}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-lg text-[#202939] font-medium mb-4">
                Client Point of Contact
              </h3>

              <Grid gutter="md" className="text-[#364152] text-sm font-medium">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="First Name"
                    placeholder="Noraiz"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Last Name"
                    placeholder="Shahid"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Phone Number"
                    placeholder="+44 1234 567890"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Email Address"
                    placeholder="billing@apex.co.uk"
                    labelProps={{
                      style: { marginBottom: "6px" },
                    }}
                    radius={8}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Footer Buttons */}
          <Grid.Col span={12}>
            <div className="flex flex-col sm:flex-row justify-end gap-3 bg-white p-3 rounded-lg border border-[#E6E6E9]">
              <button
                className="text-sm text-[#364152] border border-[#CDD5DF] rounded-lg py-1.5 px-3"
                style={{ fontWeight: "600" }}
              >
                Cancel
              </button>
              <button
                className="text-sm text-black bg-[#FF8A3D] px-3 py-1.5 rounded-lg"
                style={{ fontWeight: "600" }}
              >
                Create Organisation
              </button>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default CreateOrganization;
