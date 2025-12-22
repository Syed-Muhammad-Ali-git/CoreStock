// Note: This is Login Screen...!

import React from "react";
import Image from "next/image";
import loginImage from "../assets/images/loginPage-image.png";
import LoginForm from "../components/loginForm/loginForm";

const LoginPage = () => {
  return (
    <>
      {/* Main section */}
      <section className="flex h-screen p-4">
        {/* Login Image div */}
        <div>
          <Image
            src={loginImage}
            alt="image"
            loading="eager"
            className="h-full w-auto"
          ></Image>
        </div>

        {/* Login form div */}
        <div className="flex  items-center mx-auto">
          <div>
            <h1 className="text-4xl/loose font-semibold tracking-[-2%]">
              CoreStock Admin
            </h1>
            <h3 className="text-[#697586] text-[16px] font-medium leading-6">
              Enter your details to start with CORESTOCK.
            </h3>

            {/* Login form */}
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
