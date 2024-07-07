import React from "react";
import ProjectsCard from "./projectsCard";
import { projectsData } from "@/lib/data";

const Projects = () => {
    return(

        <ProjectsCard items={projectsData}/>

    )

}

export default Projects