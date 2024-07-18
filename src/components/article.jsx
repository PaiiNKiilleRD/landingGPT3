import React from "react";

const article = ({ imageUrl, date, title }) => {
  return (
    <article className="flex flex-col w-full h-full bg-[#031B34]">
      <div className="sm:h-full h-[250px] w-full bg-[#031B34]">
        <img src={imageUrl.src} alt="Blog Image" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between h-full px-4 py-6">
        <div className="mb-20">
          <p className="text-sm font-bold">{date}</p>
          <h1 className="text-2xl font-extrabold lg:text-4xl">{title}</h1>
        </div>
        <p className="cursor-pointer">Read Full Article</p>
      </div>
    </article>
  );
};

export default article;
