"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
const words = `Below you will find different projects for practicing front end, mainly HTML,CSS and JS. Those practice projects are compriseses different levels. You can also find their source codes in a git repo.`;
 
export function TextGen() {
  return <TextGenerateEffect words={words} className="max-w-[60rem] px-2 pb-10 bg-white p-2 rounded-lg border-2 border-neutral-600 bg-opacity-60 mb-6"/>;
}