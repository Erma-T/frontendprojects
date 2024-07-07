"use client"

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import styles from "@/app/mainsections/projects.module.css";



const Projects = () =>{
    return(
        <div>
            <div className="flex flex-wrap justify-center justify-items-center gap-5">

                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:px-4  sm:pb-8 sm:pt-3  bg-white dark:bg-zinc-900">
                    
                    <div className={`${styles.imgclass} max-w-[20rem] aspect-[7/4] bg-[url('/images/show.webp')] rounded-xl`} >

                    </div>


                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Wheather App
                    </p>
            
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                    February 17, 2024. Your best opportunity to get these right now is by
                    entering raffles and waiting for the official releases.
                    </p>
                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                    </button>
                </BackgroundGradient>


                




            </div>

        </div>
    )
}

export default Projects