import { Feature, Feature2 } from "@/components";
import React from "react";

const aboutGP3 = () => {
  const bg = {
    background:
      "radial-gradient(circle at 12% 52%, rgba(3, 169, 244, 1) 0%, rgba(0, 8, 212, 1) 100%",
  };
  return (
    <section
      id="wgpt3"
      className="flex items-center justify-center w-full bg-gray-500 lg:h-screen"
      style={bg}
    >
      <div className="container flex flex-col justify-center gap-24 py-10 ">
        <Feature
          classList="md:flex-row gap-24"
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />

        <article className="flex flex-col items-start justify-between gap-y-8 lg:flex-row">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-indigo-400">
            The possibilities are beyond <br /> your imagination
          </h1>
          <p className="text-2xl font-medium text-orange-500">
            Explore The Library
          </p>
        </article>
        <article className="flex flex-col items-center justify-center gap-10 md:items-start md:flex-row">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </article>
      </div>
    </section>
  );
};

export default aboutGP3;
