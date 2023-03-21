import Image from "next/image";
import React from "react";

const ContactUsHeader = () => {
  return (
    <>
      <div className="mt-10">
        <Image
          src="/images/twcLogoWhite.png"
          width="80"
          height="30"
          alt="logo"
        />
        <div className="text-white text-4xl font-bold">contacts</div>
        <div className="text-white text-3xl font-normal">portal</div>
      </div>
    </>
  );
};

export default ContactUsHeader;
