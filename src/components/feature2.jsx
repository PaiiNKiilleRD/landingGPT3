import React from "react";
import article from "./article";

const feature2 = ({ title, text }) => {
  return (
    <article className="flex items-start justify-between w-full ">
      <header className="flex-1">
        <div className="border-t-[3px] border-pink-500 w-[38px] mb-2 shadow-md"></div>
        <h1 className="mb-5 mr-8 text-xl font-bold ">{title}</h1>
      </header>
      <div className="flex-[2]  max-w-[400px]">
        <p className="opacity-80 ">{text}</p>
      </div>
    </article>
  );
};

export default feature2;
