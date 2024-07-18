import React from "react";

const cta = () => {
  return (
    <div className="w-full px-5 lg:px-0">
      <div className="container flex-col gap-5 lg:flex-row flex items-center justify-between px-10 rounded-lg w-full min-h-40 py-10 bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-black">
            Request Early Access to Get Started
          </p>
          <h2 className="text-2xl font-bold text-black lg:text-3xl ">
            Register today & start exploring the endless possiblities.
          </h2>
        </div>
        <div>
          <button className="py-4 font-bold bg-black lg:text-xl px-14 rounded-3xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default cta;
