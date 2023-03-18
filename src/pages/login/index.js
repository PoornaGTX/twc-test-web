import React from "react";

const index = () => {
  return (
    <div className="flex flex-row h-[100vh] bg-mainBackground relative overflow-hidden">
      <div className="bg-[#083f46] -top-[350px] w-6/12 h-[180vh] rounded-r-full absolute z-10"></div>
      <div className="w-1/2 flex flex-col justify-center relative z-20 pl-30.5">
        <div className="text-white text-12.5 font-bold leading-18.25 mb-2 ">
          Hi there,
        </div>
        <div className="text-white text-4xl font-normal mb-3 w-8/12">
          Welcome to our contacts portal
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default index;
