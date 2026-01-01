import React, { useState, useCallback } from "react";
import { Card, TextInput, Grid } from "@mantine/core";

const InitialClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    adminEmail: "",
  });

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  console.log("InitialClientForm data:", formData);

  return (
    <Card withBorder radius="md" p="md">
      <h3 className="text-lg text-[#202939] font-medium mb-4">
        Initial Client Admin
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

        <Grid.Col span={12}>
          <TextInput
            label="Admin Email"
            placeholder="john.doe@apex.co.uk"
            value={formData.adminEmail}
            onChange={(e) => handleChange("adminEmail", e.target.value)}
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

export default InitialClientForm;
