import React from "react";
import { ProjectCard } from "./sub/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 ">
      <h1 className="text-transparent text-[40px] font-semibold bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-10 justify-center">
        <ProjectCard
          src="/milleniumgroup.png"
          title="Millenium Group"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmond tempor incididunt ut"
        ></ProjectCard>
        <ProjectCard
          src="/super-carousel.png"
          title="Youth Guarantee"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmond tempor incididunt ut"
        ></ProjectCard>
        <ProjectCard
          src="/view-ticket.png"
          title="X-Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmond tempor incididunt ut"
        ></ProjectCard>
      </div>
    </div>
  );
};
