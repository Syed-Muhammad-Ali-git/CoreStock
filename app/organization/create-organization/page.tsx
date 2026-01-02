"use client";

import React, { useState } from "react";
import { IconChevronsRight } from "@tabler/icons-react";
import { Grid } from "@mantine/core";
import OrganizationDetailForm from "../../components/create-organization/organizationDetailForm";
import SubscriptionForm from "../../components/create-organization/subscriptionForm";
import BillingContactForm from "../../components/create-organization/billingContactForm";
import InitialClientForm from "../../components/create-organization/initialClientForm";
import ClientPointContactForm from "../../components/create-organization/clientPointContactForm";

const CreateOrganization = () => {
  const [organizationDetailData, setOrganizationDetailData] = useState({
    organisationName: "",
    industry: "",
    type: "",
    headquartersAddress: "",
  });

  const [subscriptionData, setSubscriptionData] = useState({
    status: "Active",
    licenceSeats: "",
    subscriptionStartDate: null as Date | null,
    subscriptionEndDate: null as Date | null,
  });

  const [billingContactData, setBillingContactData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [initialClientData, setInitialClientData] = useState({
    firstName: "",
    lastName: "",
    adminEmail: "",
  });

  const [clientPointContactData, setClientPointContactData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const handleCreateOrganization = () => {
    const allFormData = {
      organizationDetail: organizationDetailData,
      subscription: subscriptionData,
      billingContact: billingContactData,
      initialClient: initialClientData,
      clientPointContact: clientPointContactData,
    };
    console.log("All form data:", allFormData);

    // Clear all form data
    setOrganizationDetailData({
      organisationName: "",
      industry: "",
      type: "",
      headquartersAddress: "",
    });
    setSubscriptionData({
      status: "Active",
      licenceSeats: "",
      subscriptionStartDate: null,
      subscriptionEndDate: null,
    });
    setBillingContactData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
    });
    setInitialClientData({
      firstName: "",
      lastName: "",
      adminEmail: "",
    });
    setClientPointContactData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
    });
  };
  return (
    <div className="bg-[#F2F4F7] min-h-screen p-1 pb-4 sm:pb-6 overflow-auto">
      {/* main heading */}
      <h1 className="pb-2 sm:pb-3 m-1 sm:m-2 flex flex-wrap items-center gap-1 text-sm sm:text-base">
        <span className="text-[#697586] font-medium">Organization</span>
        <IconChevronsRight size={18} stroke={2} className="text-[#697586]" />
        <span className="text-[#FF8A3D] font-medium">Create Organization</span>
      </h1>

      {/* body content */}
      <div className="rounded-lg m-0 sm:m-1 md:m-2 lg:m-3">
        <Grid gutter={{ base: "sm", sm: "md", lg: "lg" }}>
          {/* Organization Detail */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <OrganizationDetailForm
              formData={organizationDetailData}
              setFormData={setOrganizationDetailData}
            />
          </Grid.Col>

          {/* Subscription & Licensing */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SubscriptionForm
              formData={subscriptionData}
              setFormData={setSubscriptionData}
            />
          </Grid.Col>

          {/* Billing Contact */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <BillingContactForm
              formData={billingContactData}
              setFormData={setBillingContactData}
            />
          </Grid.Col>

          {/* Initial Client Admin */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <InitialClientForm
              formData={initialClientData}
              setFormData={setInitialClientData}
            />
          </Grid.Col>

          {/* Client point of contact */}
          <Grid.Col span={12}>
            <ClientPointContactForm
              formData={clientPointContactData}
              setFormData={setClientPointContactData}
            />
          </Grid.Col>

          {/* Footer Buttons */}
          <Grid.Col span={12}>
            <div className="flex flex-col sm:flex-row justify-end gap-3 bg-white p-2 sm:p-3 rounded-lg border border-[#E6E6E9]">
              <button
                className="text-sm text-[#364152] border border-[#CDD5DF] rounded-lg py-1.5 px-3 cursor-pointer hover:bg-gray-50 transition-colors"
                style={{ fontWeight: "600" }}
              >
                Cancel
              </button>
              <button
                className="text-sm text-black bg-[#FF8A3D] px-3 py-1.5 rounded-lg cursor-pointer hover:bg-[#e67a2f] transition-colors"
                style={{ fontWeight: "600" }}
                onClick={handleCreateOrganization}
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
