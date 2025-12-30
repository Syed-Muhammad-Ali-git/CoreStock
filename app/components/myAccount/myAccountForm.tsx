"use client";

import React, { useState } from "react";
import {
  Avatar,
  Button,
  FileButton,
  TextInput,
  PasswordInput,
  Stack,
  Group,
  Container,
  SimpleGrid,
} from "@mantine/core";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ---------------- ZOD SCHEMAS ---------------- */

const profileSchema = z.object({
  email: z.string().email("Invalid email format"),
});

const passwordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(6, "Old password must be at least 6 characters"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password do not match",
    path: ["confirmPassword"],
  });

/* ---------------- COMPONENT ---------------- */

const MyAccountForm = () => {
  const [values, setValues] = useState(() => {
    if (typeof window !== "undefined") {
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        return {
          fullName: loginData.fullName || "",
          email: loginData.email || "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        };
      }
    }
    return {
      fullName: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  });

  const [image, setImage] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        return loginData.profileImage || null;
      }
    }
    return null;
  });
  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        return loginData.fullName || "";
      }
    }
    return "";
  });
  const [userEmail, setUserEmail] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        return loginData.email || "";
      }
    }
    return "";
  });

  /* ---------------- IMAGE UPLOAD ---------------- */

  const handleFile = async (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);

      // Update localStorage loginData
      const loginDataRaw = localStorage.getItem("loginData");
      if (loginDataRaw) {
        const loginData = JSON.parse(loginDataRaw);
        loginData.profileImage = result;
        localStorage.setItem("loginData", JSON.stringify(loginData));
      } else {
        localStorage.setItem(
          "loginData",
          JSON.stringify({ profileImage: result })
        );
      }
    };
    reader.readAsDataURL(file);
  };

  /* ---------------- UPDATE PROFILE ---------------- */

  const handleUpdateProfile = () => {
    const parsed = profileSchema.safeParse({
      email: values.email,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    // Update loginData in localStorage
    const loginDataRaw = localStorage.getItem("loginData");
    if (loginDataRaw) {
      const loginData = JSON.parse(loginDataRaw);
      loginData.email = values.email;
      loginData.fullName = values.fullName;
      localStorage.setItem("loginData", JSON.stringify(loginData));
      toast.success("Profile updated successfully");
    } else {
      localStorage.setItem(
        "loginData",
        JSON.stringify({
          email: values.email,
          fullName: values.fullName,
        })
      );
      toast.success("Profile saved successfully");
    }
    window.location.reload();
  };

  /* ---------------- CHANGE PASSWORD ---------------- */

  const handleChangePassword = () => {
    const parsed = passwordSchema.safeParse({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      confirmPassword: values.confirmPassword,
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    const loginDataRaw = localStorage.getItem("loginData");

    if (!loginDataRaw) {
      toast.error("Login data not found");
      return;
    }

    const loginData = JSON.parse(loginDataRaw);

    if (loginData.password !== values.oldPassword) {
      toast.error("Old password is incorrect");
      return;
    }

    // Update password
    loginData.password = values.newPassword;
    localStorage.setItem("loginData", JSON.stringify(loginData));

    toast.success("Password changed successfully");

    setValues((s) => ({
      ...s,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  /* ---------------- UI ---------------- */

  return (
    <Container
      size="full"
      style={{
        marginLeft: "0px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
      }}
    >
      <ToastContainer />
      <form>
        <Stack>
          <h1 className="font-medium pt-2 text-[#202939]">Personal Info</h1>

          {/* Avatar with hover edit */}
          <Group align="center">
            <FileButton onChange={handleFile} accept="image/*">
              {(props) => (
                <div className="relative w-max">
                  <Avatar
                    src={image || undefined}
                    radius="100%"
                    size={100}
                    className="cursor-pointer"
                    onClick={props.onClick}
                  />
                  <div
                    onClick={props.onClick}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity rounded-full cursor-pointer"
                  >
                    <span className="text-white text-xl">✏️</span>
                  </div>
                </div>
              )}
            </FileButton>
            <div>
              <h1 className="font-medium text-xl">{userName}</h1>
              <h1 className="text-[#697586] font-normal text-sm">
                {userEmail}
              </h1>
            </div>
          </Group>

          <div>
            {/* PERSONAL INFO */}
            <div className="bg-[#F4F3F3] rounded-2xl py-2 px-4 mb-4">
              <h1 className="font-medium pb-5 pt-2">Personal Information</h1>

              <SimpleGrid cols={{ sm: 2 }} spacing="md">
                <TextInput
                  label="Full Name"
                  placeholder="John Wick"
                  value={values.fullName}
                  onChange={(e) =>
                    setValues((s) => ({
                      ...s,
                      fullName: e.target.value,
                    }))
                  }
                  styles={{ label: { color: "#364152" } }}
                />

                <TextInput
                  label="Email"
                  placeholder="johnwick@corestock.com"
                  value={values.email}
                  onChange={(e) =>
                    setValues((s) => ({
                      ...s,
                      email: e.target.value,
                    }))
                  }
                  styles={{ label: { color: "#364152" } }}
                />
              </SimpleGrid>

              <Group justify="flex-end" className="mt-4 mb-2">
                <Button
                  onClick={handleUpdateProfile}
                  style={{
                    backgroundColor: "#FF8A3D",
                    color: "black",
                    borderRadius: "8px",
                  }}
                >
                  Update Changes
                </Button>
              </Group>
            </div>

            {/* PASSWORD */}
            <div className="bg-[#F4F3F3] rounded-2xl py-2 px-4 mb-8">
              <h1 className="font-medium pb-5">Password</h1>

              <SimpleGrid cols={{ sm: 3 }} spacing="md">
                <PasswordInput
                  label="Old Password"
                  placeholder="Enter Password"
                  value={values.oldPassword}
                  onChange={(e) =>
                    setValues((s) => ({
                      ...s,
                      oldPassword: e.target.value,
                    }))
                  }
                  styles={{ label: { color: "#364152" } }}
                />

                <PasswordInput
                  label="New Password"
                  placeholder="Enter Password"
                  value={values.newPassword}
                  onChange={(e) =>
                    setValues((s) => ({
                      ...s,
                      newPassword: e.target.value,
                    }))
                  }
                  styles={{ label: { color: "#364152" } }}
                />

                <PasswordInput
                  label="Confirm Password"
                  placeholder="Enter Password"
                  value={values.confirmPassword}
                  onChange={(e) =>
                    setValues((s) => ({
                      ...s,
                      confirmPassword: e.target.value,
                    }))
                  }
                  styles={{ label: { color: "#364152" } }}
                />
              </SimpleGrid>

              <Group justify="flex-end" className="mt-4 mb-3">
                <Button
                  onClick={handleChangePassword}
                  style={{
                    backgroundColor: "#FF8A3D",
                    color: "black",
                    borderRadius: "8px",
                  }}
                >
                  Change Password
                </Button>
              </Group>
            </div>
          </div>
        </Stack>
      </form>
    </Container>
  );
};

export default MyAccountForm;
