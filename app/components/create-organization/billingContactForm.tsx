import React, { useState, useCallback } from "react";
import { Card, TextInput, Grid } from "@mantine/core";

const BillingContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  console.log("BillingContactForm data:", formData);

  return (
    <Card withBorder radius="md" p="md">
      <h3 className="text-lg text-[#202939] font-medium mb-4">
        Billing Contact
      </h3>

      <Grid gutter="md" className="text-[#364152] text-sm font-medium">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label="First Name"
            placeholder="Noraiz"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
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
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
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
            value={formData.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
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
            value={formData.emailAddress}
            onChange={(e) => handleChange("emailAddress", e.target.value)}
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

export default BillingContactForm;
