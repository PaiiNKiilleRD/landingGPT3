import React from "react";
import feature from "@/components/feature";
import { Feature } from "@/components";

const features = () => {
  return (
    <section className="bg-green-500 ">
      <div className="container flex flex-col items-center justify-center gap-10 py-10 md:gap-20 md:items-start lg:flex-row lg:justify-between">
        <article className="max-w-[450px]">
          <h1 className="mb-8 text-4xl font-bold">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </article>
        <div className="flex flex-col items-center justify-center w-full gap-10 ">
          <Feature
            classList="md:flex-row "
            title="Improving end distrusts instantly "
            text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          ></Feature>
          <Feature
            classList="md:flex-row "
            title="Become the tended active"
            text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          ></Feature>
          <Feature
            classList="md:flex-row "
            title="Message or am nothing"
            text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          ></Feature>
          <Feature
            classList="md:flex-row "
            title="Really boy law county"
            text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          ></Feature>
        </div>
      </div>
    </section>
  );
};

export default features;
