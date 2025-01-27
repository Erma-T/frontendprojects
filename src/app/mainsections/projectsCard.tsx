"use client"

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import styles from "@/app/mainsections/projects.module.css";
import { projectsData } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import { TextGen } from "./textgen";
import PaginationComponent from "./paginationComponent";
import { FaStar } from "react-icons/fa6";



const ProjectsCard = ({
    items,
  }: {
    items: {
        imageurl: string;
        title: string;
        level:string;
        description: string;
        livelink: string;
        repolink: string;
    }[];
  }) =>{

    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return(

        <div className="flex flex-wrap justify-center justify-items-center w-[60rem] pt-[10rem]">
            
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700 py-8">
                Projects
            </p>

            <TextGen/>

            <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

                {items.map((item, idx) => (

                    <React.Fragment key={item?.repolink}>

                        <BackgroundGradient className="flex flex-col h-full rounded-[22px] max-w-sm p-4 sm:px-4 sm:pb-4 sm:pt-3  bg-white dark:bg-zinc-900">

                            <div className={`${styles.imgclass} max-w-[16rem] max-h-[9rem] rounded-xl bg-cover bg-center`} >
                                <Image alt={item.title} width={400} height={50} src={`/images/${item.imageurl}`} className="rounded-t-xl aspect-video"/> 
                                <span className="flex justify-center justify-items-center absolute top-3 left-4 bg-slate-800/70 py-2 px-4 rounded-tl-2xl text-white font-medium">{item.level} &nbsp; &nbsp;  <FaStar size={20} className="pt-1"/> </span>
                            </div>


                            <div className="flex-1 flex flex-col pt-4 px-1">
                                
                                <div className="flex-1">
                                    
                                    <header className="mb-1">
                                        <h2 className="text-xl font-extrabold leading-snug">
                                            {item.title}                                           
                                        </h2>
                                    </header>
                                    
                                    <div className="text-sm text-slate-600">
                                        <p>{item.description}</p>

                                        <div className="w-full flex flex-wrap justify-start justify-items-start pt-[0.7rem]">
                                            <span className="py-[0.1rem] text-[#3a1a6d] text-[0.65rem] font-semibold italic">#HTML</span>
                                            <span className="pl-[1rem] py-[0.1rem] text-[#3a1a6d] text-[0.65rem] font-semibold italic">#CSS</span>                            
                                            <span className="pl-[1rem] py-[0.1rem] text-[#3a1a6d] text-[0.65rem] font-semibold italic">#JavaScript</span>                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end space-x-2 gap-2">
                                    <Link
                                        href={item?.livelink}
                                        className="flex px-[1rem] bg-[#010B0E] justify-center py-1 justify-items-center rounded-lg"  
                                        target="_blank"
                                        >
                                        
                                        <span className="font-normal text-[0.8rem] py-[0.1rem] px-1 text-white">Demo</span>
                                        <svg width="20" height="20" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    
                                    </Link>

                                    <Link
                                        href={item?.repolink}
                                        className="flex px-[1rem] bg-[#010B0E] justify-center py-1 justify-items-center rounded-lg" 
                                        target="_blank">
                                        
                                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" fill="white"></path>
                                        </svg>
                                    
                                    </Link>    
                                </div>
                            </div>
                        </BackgroundGradient>
                    
                    </React.Fragment>


                ))}


                
                



            </div>
            
            <div className="flex justify-center justify-items-center w-full py-10">
                    <PaginationComponent/>
                </div>





                




            

        </div>
    )
}

export default ProjectsCard