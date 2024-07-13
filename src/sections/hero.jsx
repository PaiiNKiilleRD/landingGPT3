import React from "react";
// import { Icon } from "@iconify/react";
import pplGroup from "@/assets/pplGroup.png";
import heroImage from "@/assets/aiFace.png";

const hero = () => {
  const heroBg = {
    background:
      "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)",
  };
  return (
    <section
      className="flex  flex-col lg:flex-row items-center justify-center w-full  xl:flex-row pt-[120px] md:pt-[100px] lg:pt-0 md:h-screen  "
      style={heroBg}
    >
      {/*  */}
      {/* <div className="absolute w-full h-screen" style={heroBg}></div> */}
      {/*  */}
      <div className="container flex flex-col items-center justify-center w-full lg:flex-row lg:gap-x-8">
        <article className="flex  z-[1] flex-col items-center lg:w-[50%] justify-center text-left  md:gap-y-8 gap-6">
          <h1 className="text-5xl font-bold leading-snug text-transparent lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className=" md:text-xl opacity-80">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <form
            action=" "
            className="flex items-center justify-center w-full  bg-[#052d56] overflow-hidden md:rounded-lg rounded-lg flex-row "
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Email Address"
              className="w-full px-4 bg-transparent rounded-lg outline-none "
            />
            <button
              type="button"
              className="px-2  min-w-[150px] py-4 font-medium bg-orange-600 hover:bg-orange-800  rounded-r-lg"
            >
              Get Started
            </button>
          </form>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
            <img src={pplGroup.src} alt="People" width={220} />
            <p className=" text-[14px] font-medium">
              1,600 people requested <br className="hidden" /> access a visit in
              last 24 hours
            </p>
          </div>
        </article>
        <article className=" z-[1] w-full flex items-center justify-center  lg:w-[50%] mt-14  lg:mt-0 ">
          <img
            src={heroImage.src}
            alt="AI Face"
            className="w-[220px] md:w-[350px] lg:w-[800px]"
          />
        </article>
      </div>
    </section>
  );
};

export default hero;
