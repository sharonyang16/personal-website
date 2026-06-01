"use client";
import { ProjectCardProps } from "@/types/data";
import { Typography } from "@/components/base";
import ProjectCard from "./ProjectCard";
import React from "react";

const ProjectSection = ({
  title,
  cta,
  projects,
}: {
  title: string;
  cta?: React.ReactNode;
  projects: ProjectCardProps[];
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:py-8">
        <Typography intent="subheadding1">
          {title}
        </Typography>
        {cta}
      </div>

      <div className="flex flex-col gap-16 col-span-2 lg:py-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
