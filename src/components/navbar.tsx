import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";

const Navbar = () =>{
    return(
        <div className="z-[50] fixed top-0 w-full border-b bg-white dark:bg-black border-neutral-200 dark:border-white/[0.1]">

            <div className="header flex w-[80%] justify-between m-auto py-[1rem]">
                <div>
                    <a href="/" className="font-medium text-neutral-700">
                        <h1 > HOME </h1>
                    </a>
                </div>
                
                <div className="flex flex-wrap">
                    
                    <a href="https://github.com/Erma-T" target="_blank"><FaSquareGithub className="text-neutral-700 mx-[0.2rem]" size={30}/></a>
                    <a href="https://www.linkedin.com/in/ermiyas-tilahun/" target="_blank"><FaLinkedin className="text-neutral-700 mx-[0.2rem]" size={30}/></a>
                    
                </div>

            </div>

        </div>
    )
}

export default Navbar