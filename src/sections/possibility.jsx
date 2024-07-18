import React from "react";
import possibilityImage from "@/assets/possibility image.png";

const possibility = () => {
  return (
    <section className="py-10 lg:h-screen">
      <div className="container flex flex-col gap-10 lg:flex-row">
        <article className="flex items-center justify-start flex-1">
          <img src={possibilityImage.src} alt="" className="w-full h-full" />
        </article>
        <article className="flex flex-col items-start justify-end flex-1 gap-y-6">
          <p className="font-medium text-[#71E5FF]">
            Request Early Access to Get Started
          </p>
          <h2 className="text-4xl font-bold ">
            The possibilities are beyond your imagination
          </h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="font-medium  text-[#FF8A71] lg:mb-10">
            Request Early Access to Get Started
          </p>
        </article>
      </div>
    </section>
  );
};

export default possibility;
