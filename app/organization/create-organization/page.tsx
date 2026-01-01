"use client";

import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import {
  Card,
  TextInput,
  Select,
  NumberInput,
  Grid,
  Button,
} from "@mantine/core";
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
              <h3 className="text-sm font-semibold mb-4">
                Organization Detail
              </h3>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Organisation Name"
                    placeholder="Apex Tunnelling Ltd"
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Industry"
                    placeholder="Select industry"
                    data={["Civil Engineering", "Construction", "IT"]}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Type"
                    placeholder="Select type"
                    data={["Contractor", "Supplier"]}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Headquarters Address"
                    placeholder="Enter Address"
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
              <h3 className="text-sm font-semibold mb-4">
                Subscription & Licensing
              </h3>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <Select
                    label="Status"
                    data={["Active", "Expired", "Suspended"]}
                    defaultValue="Active"
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <NumberInput
                    label="Licence Seats (Max Users)"
                    placeholder="25"
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <DatePickerInput
                    label="Subscription Start Date"
                    placeholder="Pick date"
                    dropdownType="popover"
                    popoverProps={{
                      withinPortal: true,
                      zIndex: 10000,
                      position: "bottom-start",
                      shadow: "md",
                    }}
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <DatePickerInput
                    label="Subscription End/Renewal"
                    placeholder="Pick date"
                    dropdownType="popover"
                    popoverProps={{
                      withinPortal: true,
                      zIndex: 10000,
                      position: "bottom-start",
                      shadow: "md",
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Billing Contact */}
          <Grid.Col span={12}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-sm font-semibold mb-4">Billing Contact</h3>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput label="First Name" placeholder="Noraiz" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput label="Last Name" placeholder="Shahid" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Phone Number"
                    placeholder="+44 1234 567890"
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    label="Email Address"
                    placeholder="billing@apex.co.uk"
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Initial Client Admin */}
          <Grid.Col span={12}>
            <Card withBorder radius="md" p="md">
              <h3 className="text-sm font-semibold mb-4">
                Initial Client Admin
              </h3>

              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput label="First Name" placeholder="Noraiz" />
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput label="Last Name" placeholder="Shahid" />
                </Grid.Col>

                <Grid.Col span={12}>
                  <TextInput
                    label="Admin Email"
                    placeholder="john.doe@apex.co.uk"
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Grid.Col>

          {/* Footer Buttons */}
          <Grid.Col span={12}>
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <Button variant="default" fullWidth={false}>
                Cancel
              </Button>
              <Button color="orange">Create Organisation</Button>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default CreateOrganization;
