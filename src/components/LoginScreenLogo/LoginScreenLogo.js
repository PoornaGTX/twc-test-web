import Image from "next/image";
import React from "react";

const LoginScreenLogo = () => {
  return (
    <div>
      <Image src="/images/twcLogo.png" width="100" height="100" alt="logo" />
      <div className="text-themeColor text-6xl font-bold">contacts</div>
      <div className="text-themeColor text-6xl font-medium">portal</div>
    </div>
  );
};

export default LoginScreenLogo;
