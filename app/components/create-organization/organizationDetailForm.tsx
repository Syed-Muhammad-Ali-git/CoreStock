import React, { useCallback } from "react";
import { Card, TextInput, Select, Grid } from "@mantine/core";

interface OrganizationDetailFormProps {
  formData: {
    organisationName: string;
    industry: string;
    type: string;
    headquartersAddress: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      organisationName: string;
      industry: string;
      type: string;
      headquartersAddress: string;
    }>
  >;
}

const OrganizationDetailForm = ({
  formData,
  setFormData,
}: OrganizationDetailFormProps) => {
  const handleChange = useCallback(
    (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [setFormData]
  );

  return (
    <Card withBorder radius="md" p={{ base: "sm", sm: "md" }}>
      <h3 className="text-lg text-[#202939] font-medium mb-4">
        Organization Detail
      </h3>

      <Grid gutter="md" className="text-[#364152] text-sm font-medium">
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            label="Organisation Name"
            placeholder="Apex Tunnelling Ltd"
            value={formData.organisationName}
            onChange={(e) => handleChange("organisationName", e.target.value)}
            labelProps={{
              style: { marginBottom: "6px" },
            }}
            radius={8}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Select
            label="Industry"
            placeholder="Infrastructure Services"
            data={["Civil Engineering", "Construction", "IT"]}
            value={formData.industry}
            onChange={(value) => handleChange("industry", value || "")}
            labelProps={{
              style: { marginBottom: "6px" },
            }}
            radius={8}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Select
            label="Status"
            placeholder="Active"
            data={["Contractor", "Plant hire company"]}
            value={formData.type}
            onChange={(value) => handleChange("type", value || "")}
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
            value={formData.headquartersAddress}
            onChange={(e) =>
              handleChange("headquartersAddress", e.target.value)
            }
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

export default OrganizationDetailForm;
