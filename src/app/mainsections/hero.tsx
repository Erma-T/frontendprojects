"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <HeroHighlight className="flex flex-wrap justify-center justify-items-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex flex-wrap justify-center px-4 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >

            <p className="text-[8rem]  font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-neutral-300 via-neutral-600 to-black "> 
                    Welcome
                </span> 
                👋
            </p>
            
            <span className="text-2xl font-medium">
                This is a place to practice front end concepts. You can find front end projects with different levels which created by{" "}
                <Highlight className="text-black dark:text-white">
                Ermiyas Tilahun
                </Highlight>
            </span>
            
            <motion.span 
                initial={{  }}
                animate={{ y: 10, }}
                transition={{

                    type: "spring", 
                    stiffness: 30,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 0.2,
                    repeatDelay: 0.1,
                }}
                className="mt-[5rem] flex flex-wrap justify-center justify-items-center border-black border p-2 rounded-3xl">
                
                <BsArrowDown/>
            
            </motion.span>
      </motion.h1>
      
    </HeroHighlight>
  );
}
export default Hero
