import React from "react";

const LoginRegisterLayout = ({ children }) => {
  return (
    <div className="flex flex-row items-center gap-40 xl:gap-60 xxl:gap-80 2xl:gap-96 h-[100vh] bg-mainBackground relative overflow-hidden">
      <div className="bg-themeColor -top-[150px] w-7/12 h-[130vh] rounded-r-[100%] absolute z-10"></div>
      {children}
    </div>
  );
};

export default LoginRegisterLayout;
