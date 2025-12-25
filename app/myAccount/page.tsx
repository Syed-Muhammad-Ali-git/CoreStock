"use client";

import React, { useEffect, useState } from "react";
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
// import { z } from "zod";

// const schema = z
//   .object({
//     fullName: z.string().min(2, "Full name must be at least 2 characters"),
//     email: z.string().email("Invalid email address"),
//     oldPassword: z.string().min(6, "Old password must be at least 6 chars"),
//     newPassword: z.string().min(6, "New password must be at least 6 chars"),
//     confirmPassword: z
//       .string()
//       .min(6, "Confirm password must be at least 6 chars"),
//   })
//   .refine((data) => data.newPassword === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

const MyAccountPage = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [image, setImage] = useState<string | null>(null);

  //   const p = localStorage.getItem("profileImage");

  //   useEffect(() => {
  //     const email = localStorage.getItem("email") || "";
  //     const fullName = localStorage.getItem("fullName") || "";
  //     if (p) setImage(p);
  //     setValues((s) => ({ ...s, email, fullName }));
  //   }, []);

  const handleFile = async (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
      localStorage.setItem("profileImage", result);
    };
    reader.readAsDataURL(file);
  };

  //   const profileSchema = z.object({
  //     fullName: z.string().min(2, "Full name must be at least 2 characters"),
  //     email: z.string().email("Invalid email address"),
  //   });

  //   const handleUpdateProfile = (e?: React.FormEvent) => {
  //     e?.preventDefault();
  //     const parsed = profileSchema.safeParse({
  //       fullName: values.fullName,
  //       email: values.email,
  //     });
  //     if (!parsed.success) {
  //       const zErrors: Record<string, string> = {};
  //       parsed.error.issues.forEach((err: any) => {
  //         const field = err.path[0] as string;
  //         zErrors[field] = err.message;
  //       });
  //       setErrors(zErrors);
  //       console.log("Validation errors", zErrors);
  //       return;
  //     }

  // persist
  //     localStorage.setItem("email", values.email);
  //     localStorage.setItem("fullName", values.fullName);
  //     setErrors({});
  //     console.log("Profile updated:", {
  //       fullName: values.fullName,
  //       email: values.email,
  //       image,
  //     });
  //   };

  //   const handleChangePassword = (e?: React.FormEvent) => {
  //     e?.preventDefault();
  //     const passSchema = z
  //       .object({
  //         oldPassword: z.string().min(6, "Old password must be at least 6 chars"),
  //         newPassword: z.string().min(6, "New password must be at least 6 chars"),
  //         confirmPassword: z
  //           .string()
  //           .min(6, "Confirm password must be at least 6 chars"),
  //       })
  //       .refine((data) => data.newPassword === data.confirmPassword, {
  //         message: "Passwords do not match",
  //         path: ["confirmPassword"],
  //       });

  //     const parsed = passSchema.safeParse({
  //       oldPassword: values.oldPassword,
  //       newPassword: values.newPassword,
  //       confirmPassword: values.confirmPassword,
  //     });
  //     if (!parsed.success) {
  //       const zErrors: Record<string, string> = {};
  //       parsed.error.issues.forEach((err: any) => {
  //         const field = err.path[0] as string;
  //         zErrors[field] = err.message;
  //       });
  //       setErrors(zErrors);
  //       console.log("Password validation errors", zErrors);
  //       return;
  //     }

  //     // here you would call API to change password; for now log and clear
  //     setErrors({});
  //     console.log("Password changed for:", { email: values.email });
  //     setValues((s) => ({
  //       ...s,
  //       oldPassword: "",
  //       newPassword: "",
  //       confirmPassword: "",
  //     }));
  //   };

  return (
    <div className="bg-[#F2F4F7] h-auto md:h-140.5 p-1 ">
      <h1 className="m-4 py-4">
        <span className="text-[#697586] font-medium">Dashboard</span>
        <span className="text-[#697586] font-extrabold"> &gt;&gt; </span>
        <span className="text-[#FF8A3D] font-medium">My Account</span>
      </h1>

      <Container
        size="full"
        style={{
          marginLeft: "0px",
          padding: "20px",
          margin: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10 0",
        }}
      >
        <form>
          <Stack>
            <h1 className="font-medium pb-3 pt-2 text-[#202939]">
              Personal Info
            </h1>
            <Group>
              <FileButton onChange={handleFile} accept="image/*">
                {(props) => (
                  <Avatar
                    src={image || undefined}
                    radius="100%"
                    size={100}
                    style={{ cursor: "pointer" }}
                    onClick={props.onClick}
                  />
                )}
              </FileButton>
            </Group>

            <div>
              <div className="bg-[#e6e3e370] rounded-2xl py-2 px-4 mb-4">
                <h1 className="font-medium pb-3 pt-2">Personal Information</h1>
                <SimpleGrid cols={{ sm: 2 }} spacing="md">
                  <TextInput
                    label="Full Name"
                    placeholder="John Wick"
                    value={values.fullName}
                    onChange={(e) =>
                      setValues((s) => ({ ...s, fullName: e.target.value }))
                    }
                    error={errors.fullName}
                    styles={{ label: { color: "#364152" } }}
                  />

                  <TextInput
                    label="Email"
                    placeholder="johnwick@corestock.com"
                    value={values.email}
                    onChange={(e) =>
                      setValues((s) => ({ ...s, email: e.target.value }))
                    }
                    error={errors.email}
                    styles={{ label: { color: "#364152" } }}
                  />
                </SimpleGrid>

                <Group justify="flex-end" className="mt-4 mb-2">
                  <Button
                    //   onClick={handleUpdateProfile}
                    style={{ backgroundColor: "#FF8A3D", color: "black" }}
                  >
                    Update Changes
                  </Button>
                </Group>
              </div>

              <div className="bg-[#e6e3e370] rounded-2xl py-2 px-4 mb-8">
                <h1 className="font-medium pb-3">Password</h1>
                <SimpleGrid cols={{ sm: 3 }} spacing="md">
                  <PasswordInput
                    label="Old Password"
                    placeholder="Enter Password"
                    value={values.oldPassword}
                    onChange={(e) =>
                      setValues((s) => ({ ...s, oldPassword: e.target.value }))
                    }
                    error={errors.oldPassword}
                    styles={{ label: { color: "#364152" } }}
                  />

                  <PasswordInput
                    label="New Password"
                    placeholder="Enter Password"
                    value={values.newPassword}
                    onChange={(e) =>
                      setValues((s) => ({ ...s, newPassword: e.target.value }))
                    }
                    error={errors.newPassword}
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
                    error={errors.confirmPassword}
                    styles={{ label: { color: "#364152" } }}
                  />
                </SimpleGrid>

                <Group justify="flex-end" className="mt-4 mb-3">
                  <Button
                    //   onClick={handleChangePassword}
                    style={{ backgroundColor: "#FF8A3D", color: "black" }}
                  >
                    Change Password
                  </Button>
                </Group>
              </div>
            </div>
          </Stack>
        </form>
      </Container>
    </div>
  );
};

export default MyAccountPage;
