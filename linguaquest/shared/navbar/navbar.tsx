"use client";
import { AuthType, useAuthContext } from "@/providers/loginProvider";
import Button from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useCallback } from "react";
import { Menu } from "react-feather";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export const navigation = [
  { id: "0", title: "Features", url: "/features" },
  { id: "1", title: "Pricing", url: "#pricing" },
  { id: "2", title: "How to use", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuthContext();

  // const toggleNavigation = useCallback(() => {
  //   setOpenNavigation((prevOpen) => {
  //     const newOpen = !prevOpen;
  //     if (newOpen) {
  //       disablePageScroll();
  //     } else {
  //       enablePageScroll();
  //     }
  //     return newOpen;
  //   });
  // }, []);

  return (
    <nav className="bg-backgrounds-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <Link href="/">
              <h1 className="leading-10  font-Poppins text-xl  font-semibold bg-gradient-1 text-transparent bg-clip-text relative  px-4 ">
                LinguaQuest
                <span
                  className="absolute w-full left-0 h-full bg-transparent border-[1px] border-red-200 rounded-full rotate-[5deg]"
                  aria-hidden="true"
                ></span>
                <span
                  className="absolute w-full left-0 h-full bg-transparent border-[1px]  border-red-200 rounded-full rotate-[10deg]"
                  aria-hidden="true"
                ></span>
              </h1>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:bg-primary focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    className="transition-all"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    className="transition-all"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 lg:px-6  text-n-1 px-2 py-6 font-semibold ${
                    item.url === pathname
                      ? "z-2 lg:text-n-1 text-green-500"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:block hidden ">
            <Button>Sign In</Button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden rounded-md bg-white fixed top-0 left-0 z-40 w-full h-full transition-all duration-200  ${
          isOpen
            ? "w-full translate-x-0 opacity-100 "
            : "w-0 translate-x-full opacity-0  lg:translate-x-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-20 ">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`block relative font-code uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-2 md:py-2 lg:-mr-0.25 text-lg  ${
                item.url === pathname
                  ? "z-2 text-n-1 text-green-500"
                  : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="p-2 w-max m-auto">
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
