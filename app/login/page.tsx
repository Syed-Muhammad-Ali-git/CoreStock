// Note: This is Login Screen...!

import React from "react";
import Image from "next/image";
import loginImage from "../assets/images/loginPage-image.png";
import LoginForm from "../components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <section className="min-h-screen flex items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-10 ">
        {/* Image */}
        <div className="flex justify-center w-full">
          <Image
            src={loginImage}
            alt="Login Illustration"
            className="md:w-full lg:w-120 md:h-screen"
            priority
          />
        </div>

        {/* Form */}
        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">
              CoreStock Admin
            </h1>

            <p className="text-[#697586] text-base mb-8">
              Enter your details to start with CORESTOCK.
            </p>

            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
