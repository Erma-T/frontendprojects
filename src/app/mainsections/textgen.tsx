"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = `Here, you'll find a mix of interactive interfaces, pixel-perfect designs, and innovative front end solutions. So, click around, explore the projects, roll your sleeves and practive!`;
 
export function TextGen() {
  return <TextGenerateEffect words={words} className="z-30 max-w-[60rem] font-bold align-middle text-center text-2xs px-2 bg-white p-2 rounded-lg border-2 border-neutral-600 bg-opacity-60 mb-6"/>;
}