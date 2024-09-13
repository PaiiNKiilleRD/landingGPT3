import React from "react";
import { Article } from "@/components";
import { image1, image2, image3, image4, image5 } from "@/assets/blog/import";

const blog = () => {
  return (
    <section className="py-10 ">
      <div className="container flex flex-col ">
        <div className="w-full">
          <h2 className="w-full text-white my-20 text-4xl font-bold tracking-tighter text-left lg:text-6xl">
            A lot is happening, We are blogging about it.
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-[0.75]  mr-8 my-8 lg:my-0 md:w-[48%] w-full">
            <Article imageUrl={image1} date={"Sep 21, 2024"} title={"GPT-3"} />
          </div>
          <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 ">
            <Article imageUrl={image2} date={"Sep 21, 2024"} title={"GPT-3"} />
            <Article imageUrl={image3} date={"Sep 21, 2024"} title={"GPT-3"} />
            <Article imageUrl={image4} date={"Sep 21, 2024"} title={"GPT-3"} />
            <Article imageUrl={image5} date={"Sep 21, 2024"} title={"GPT-3"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;
