import React from "react";
import gpt3 from "@/assets/GPT-3.svg";

const footer = () => {
  return (
    <footer className="h-1/2 bg-[#031B34]">
      <article className="container flex flex-col items-center justify-center py-10">
        <div className="w-full">
          <h1 className="mb-12 text-6xl font-bold tracking-tighter">
            Do you want to step in to the future before others
          </h1>
        </div>
        <div className="flex items-center justify-center p-4 mb-[10rem] cursor-pointer tracking-wider border">
          <p className="text-xl ">Request Early Access</p>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-between w-full text-left [&>div>h4]:font-bold [&>div>h4]:text-xl [&>div]:w-[180px] [&>div>h4]:mb-4 [&>div]:m-4 [&>div>p]:text-sm [&>div>p]:mb-2">
          <div className="flex flex-col ">
            <img
              src={gpt3.src}
              alt="Logo"
              className="w-[120px] h-[30px] mb-4"
            />
            <p className="">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div>
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="w-full mt-10 text-center">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </article>
    </footer>
  );
};

export default footer;
