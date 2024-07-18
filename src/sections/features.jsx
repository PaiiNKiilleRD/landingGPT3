import React from "react";
import feature from "@/components/feature";
import { Feature } from "@/components";

const features = () => {
  return (
    <section className="">
      <div className="container flex flex-col items-start justify-center gap-10 py-10 md:gap-20 lg:flex-row lg:justify-between">
        <article className="max-w-[450px]">
          <h1 className="mb-8 text-4xl font-bold leading-10">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="font-medium text-[#FF8A71]">
            Request Early Access to Get Started
          </p>
        </article>
        <div className="flex flex-col items-center justify-center w-full gap-10 ">
          <Feature
            classList="md:flex-row   lg:[&>div>p]:ml-10    [&>div>p]:px-2 md:[&>div>p]:px-0"
            title="Improving end distrusts instantly "
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          ></Feature>
          <Feature
            classList="md:flex-row    lg:[&>div>p]:ml-10  [&>div>p]:px-2 md:[&>div>p]:px-0"
            title="Become the tended active"
            text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          ></Feature>
          <Feature
            classList="md:flex-row   lg:[&>div>p]:ml-10   [&>div>p]:px-2 md:[&>div>p]:px-0"
            title="Message or am nothing"
            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          ></Feature>
          <Feature
            classList="md:flex-row   lg:[&>div>p]:ml-10   [&>div>p]:px-2 md:[&>div>p]:px-0"
            title="Really boy law county"
            text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          ></Feature>
        </div>
      </div>
    </section>
  );
};

export default features;
