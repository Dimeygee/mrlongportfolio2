

import {Button} from "../components/button"
import { Project } from "./project"
import { projects } from "../utils"
import {Motion} from "./motion"
import React from "react"
import  ProjectOverlay  from "./projectoverlay"




export const Main = () => {


    return(
        <main id="myprojects" className="lg:pt-[98px] pt-[100px]">
            <Motion>
                <section className="section1 mb-[56px] ">
                    <Button text="Work" opacity={true} py="10px" px="24px" color="#2F80ED" fontWeight="500" ifSectionStyle />
                    <h4 className="font-syne text-[36px] md:text-[42px] font-bold text-[#1A202C] dark:text-[#F7FAFC]">Selected projects</h4>
                </section>
            </Motion>
            <section className="flex flex-col gap-[22px]">
                {projects.map(project => {
                    return(
                        <React.Fragment key={project.id}>
                            <Motion>
                                <a href={project.url} target="__blank" className="relative">
                                    <ProjectOverlay index={project.id} />
                                    <Project image={project.image} title={project.title} content={project.content} mobileImg={project.mobileImg} projectID={project.id} key={project.id} />
                                </a>
                            </Motion>
                        </React.Fragment>
                    )
                })}
                
            </section>
            <div className="flex justify-center mt-[50px]">
                <Button text="See more" color="#2F80ED" fontWeight={700} px="39px" py="15px" seemore={true} />
            </div>
        </main>
    )

}