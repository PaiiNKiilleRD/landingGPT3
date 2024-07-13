import React from "react";

// import {
//   google,
//   slack,
//   atlassian,
//   dropbox,
//   shopify,
// } from "@/assets/brands/import";

const brand = () => {
  return (
    <section className="bg-[#101010]">
      <article className=" flex flex-wrap items-center justify-center [&>div]:flex-1 [&>div]:max-w-[150px] [&>div]:min-w-[120px] md:gap-x-6 lg:gap-x-10 text-slate-500">
        <div className="flex items-center justify-center ">
          <iconify-icon
            icon="devicon-plain:google-wordmark"
            width="120"
            height="120"
          ></iconify-icon>
        </div>
        <div className="flex items-center justify-center">
          <iconify-icon
            icon="devicon-plain:slack-wordmark"
            width="120"
            height="120"
          ></iconify-icon>
        </div>
        <div className="flex items-center justify-center">
          <iconify-icon
            icon="devicon-plain:astro-wordmark"
            width="120"
            height="120"
          ></iconify-icon>
        </div>
        <div className="flex items-center justify-center ">
          <iconify-icon
            icon="devicon-plain:postman-wordmark"
            width="120"
            height="120"
          ></iconify-icon>
        </div>
        <div className="flex items-center justify-center">
          <iconify-icon
            icon="devicon-plain:storybook-wordmark"
            width="120"
            height="120"
          ></iconify-icon>
        </div>
      </article>
    </section>
  );
};

export default brand;
