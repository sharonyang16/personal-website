"use client";
import { ProjectCardProps } from "@/types/data";
import { Typography } from "@/components/base";

import ProjectCard from "./ProjectCard";

const ProjectSection = ({
  title,
  projects,
}: {
  title: string;
  projects: ProjectCardProps[];
}) => {
  return (
    <>
      <Typography
        id={title.toLowerCase()}
        intent="subheadding1"
        className="lg:py-8"
      >
        {title}
      </Typography>
      <div className="flex flex-col gap-16 col-span-2 lg:py-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
