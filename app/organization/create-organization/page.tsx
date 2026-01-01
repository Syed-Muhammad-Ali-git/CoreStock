"use client";

import React from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import { Grid } from "@mantine/core";
import OrganizationDetailForm from "../../components/create-organization/organizationDetailForm";
import SubscriptionForm from "../../components/create-organization/subscriptionForm";
import BillingContactForm from "../../components/create-organization/billingContactForm";
import InitialClientForm from "../../components/create-organization/initialClientForm";
import ClientPointContactForm from "../../components/create-organization/clientPointContactForm";

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
            <OrganizationDetailForm />
          </Grid.Col>

          {/* Subscription & Licensing */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SubscriptionForm />
          </Grid.Col>

          {/* Billing Contact */}
          <Grid.Col span={6}>
            <BillingContactForm />
          </Grid.Col>

          {/* Initial Client Admin */}
          <Grid.Col span={6}>
            <InitialClientForm />
          </Grid.Col>

          {/* Client point of contact */}
          <Grid.Col span={12}>
            <ClientPointContactForm />
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
