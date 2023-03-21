import LoginRegisterForm from "@/components/LoginRegisterForm/LoginRegisterForm";
import LoginScreenLogo from "@/components/LoginScreenLogo/LoginScreenLogo";
import LoginRegisterLayout from "@/Layout/LoginRegisterLayout";
import React from "react";

const index = () => {
  return (
    <LoginRegisterLayout>
      <>
        <LoginRegisterForm />
        <LoginScreenLogo />
      </>
    </LoginRegisterLayout>
  );
};

export default index;
