import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import "@/pages/App.css";

const links = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "What is GPT?",
    path: "#wgpt3",
  },
  {
    name: "Open AI",
    path: "#possibility",
  },
  {
    name: "Case Studies",
    path: "#features",
  },
  {
    name: "Library",
    path: "#blog",
  },
];

const navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="fixed top-0 right-0 z-10 w-full py-5 bg-transparent font-manrope ">
      <div className="container flex items-center justify-between ">
        <img src={logo.src} alt="Logo" width={63} height={16} />
        {/*  */}
        <ul className="hidden lg:flex">
          {links.map((link) => {
            return (
              <li>
                <a href={link.path} className="px-3 py-2 font-medium">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        {/*  */}
        <div className="hidden lg:block">
          <button className="px-12 py-4 font-medium">
            <a href="#">Sign in</a>
          </button>
          <button className="px-12 py-4 font-medium bg-orange-600 rounded-lg hover:bg-orange-800">
            <a href="#">Sign Up</a>
          </button>
        </div>
        {/* Side Menu */}
        <div className="block lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <iconify-icon
              icon="line-md:menu-to-close-alt-transition"
              width="48"
              height="48"
            ></iconify-icon>
          ) : (
            <iconify-icon
              icon="ri:menu-3-line"
              width="48"
              height="48"
            ></iconify-icon>
          )}
          {openMenu && (
            <div className="absolute bg-[#052d56] shadow-lg rounded-lg right-[0]  min-w-[200px] top-[90px] scale-up-center ">
              <ul className="flex flex-col items-center justify-center py-4 gap-y-4">
                {links.map((link) => {
                  return (
                    <li>
                      <a
                        href={link.path}
                        className="block px-3 py-2 font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
                <button className="px-12 py-4 font-medium">
                  <a href="#">Sign in</a>
                </button>
                <button className="px-12 py-4 font-medium bg-orange-600 rounded-lg hover:bg-orange-800">
                  <a href="#">Sign Up</a>
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default navbar;
