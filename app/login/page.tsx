// Note: This is Login Screen...!

import React from "react";
import Image from "next/image";
import loginImage from "../assets/images/loginPage-image.png";
import LoginForm from "../components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <section className="flex items-center max-w-480 ">
      {/* Image Container - visible on md screens and up */}
      <div className="hidden md:block w-screen">
        <Image
          src={loginImage}
          alt="Login Illustration"
          className="h-screen md:w-80 lg:w-110 p-2"
        />
      </div>

      {/* Form Container */}
      <div className="flex justify-center w-full mt-30 md:mt-0 p-5 xl:mr-40">
        <div className="w-120">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            CoreStock Admin
          </h1>

          <p className="text-[#697586] text-base mb-8">
            Enter your details to start with CORESTOCK.
          </p>

          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
