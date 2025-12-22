"use client";

import React from "react";
import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

// Zod Schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// TypeScript type from Zod
type LoginSchemaType = z.infer<typeof loginSchema>;

// Main component
const LoginForm: React.FC = () => {
  const router = useRouter();

  const form = useForm<LoginSchemaType>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const result = loginSchema.safeParse(values);

      if (!result.success) {
        const errors = {
          email: result.error.flatten().fieldErrors.email?.[0],
          password: result.error.flatten().fieldErrors.password?.[0],
        };

        // Show toast for invalid field
        if (errors.email) toast.error(errors.email);
        else if (errors.password) toast.error(errors.password);

        return errors;
      }

      return {};
    },
  });

  const handleLogin = (values: LoginSchemaType) => {
    //  Only runs if validation passes
    localStorage.setItem("loginData", JSON.stringify(values));
    toast.success("Login successful! Data saved to localStorage.");
    console.log("Saved to localStorage:", values);
    router.push("/");
  };

  return (
    <>
      <Stack mx="auto" mt={25} className="w-full">
        <form onSubmit={form.onSubmit(handleLogin)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="Enter Email Address"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              {...form.getInputProps("password")}
              style={{ color: "#364152", fontWeight: "500" }}
            />

            <Button
              type="submit"
              fullWidth
              style={{
                backgroundColor: "#FF8A3D",
                color: "black",
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default LoginForm;
