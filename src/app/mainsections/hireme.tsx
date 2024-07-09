"use client";

import React from "react";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

const Hireme = () => {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "get",
    },
    {
      text: "better",
    },
    {
      text: "everyday",
    },
    {
      text: "together!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="max-w-[60rem] flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The key to win in programming is practice
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
        <Link
            href={"http://ermiyas.com"}
            target="_blank"
            >

            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Contact me
            </button>
            
        </Link>

        <Link
            href={"http://ermiyas.com"}  
            target="_blank"
            >

            <button className="hover:bg-black hover:text-white w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
                Hire me
            </button>
            
        </Link>

      </div>
    </div>
  );
}

export default Hireme
