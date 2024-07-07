"use client"

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const About = () =>{
    return(
        <div >
            <div id="aboutme" className="w-full mt-[-10rem]">
                
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>

            </div>



        </div>
    )
}

export default About

export const projects = [
  {
    title: "About Me:",
    description:
      "I am Ermiyas Tilahun and I turn ideas into reality. Full stack developer with a passion for clean code and user-friendly experiences. Let's build something magical.",
    link: "https://ermiyas.com",
  },
  {
    title: "About This Project",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://github.com/Erma-T/30daysFrontEndBasic",
  },
  {
    title: "More Projects",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/Erma-T?tab=repositories",
  },
  
];