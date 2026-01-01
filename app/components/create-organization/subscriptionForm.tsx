import React, { useCallback } from "react";
import { Card, Select, NumberInput, Grid } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

interface SubscriptionFormProps {
  formData: {
    status: string;
    licenceSeats: string;
    subscriptionStartDate: Date | null;
    subscriptionEndDate: Date | null;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      status: string;
      licenceSeats: string;
      subscriptionStartDate: Date | null;
      subscriptionEndDate: Date | null;
    }>
  >;
}

const SubscriptionForm = ({ formData, setFormData }: SubscriptionFormProps) => {
  const handleChange = useCallback(
    (field: string, value: string | number | Date | null) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  return (
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
            value={formData.status}
            onChange={(value) => handleChange("status", value || "Active")}
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
            value={formData.licenceSeats}
            onChange={(value) => handleChange("licenceSeats", value)}
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
            value={formData.subscriptionStartDate}
            onChange={(value) => handleChange("subscriptionStartDate", value)}
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
            value={formData.subscriptionEndDate}
            onChange={(value) => handleChange("subscriptionEndDate", value)}
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
  );
};

export default SubscriptionForm;
