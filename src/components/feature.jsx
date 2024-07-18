import React from "react";
import article from "./article";

const feature = ({ title, text, classList }) => {
  return (
    <article
      className={`${classList}  flex items-start justify-between w-full `}
    >
      <header className="flex-1 ">
        <div className="border-t-[3px]  border-pink-500 w-[38px] mb-2 shadow-md"></div>
        <h1 className="mb-5 font-bold md:mr-8 md:text-xl ">{title}</h1>
      </header>
      <div className="flex-[1.5] lg:flex-[2] ">
        <p className="text-sm leading-6 tracking-tight md:text-base opacity-80">
          {text}
        </p>
      </div>
    </article>
  );
};

export default feature;
