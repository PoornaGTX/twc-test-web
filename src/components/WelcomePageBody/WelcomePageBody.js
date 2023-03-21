import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

const WelcomePageBody = () => {
  return (
    <div className="mt-28 mb-28">
      <div className="text-white text-12.5 font-bold leading-18.25 mb-2 ">
        Welcome,
      </div>
      <div className="text-white text-4xl font-normal w-9/12 mb-20">
        This is where your contacts will live. Click the button below to add a
        new contact.
      </div>
      <Link href="/contacts/new">
        <Button
          buttonText="add your first contact"
          fontSize="text-md"
          fontWeight="font-medium"
          paddingX="px-5"
          paddingY="py-2"
          handleButton={() => {}}
          width="w-fit"
          backgroundColor="bg-themeColor"
        />
      </Link>
    </div>
  );
};

export default WelcomePageBody;
