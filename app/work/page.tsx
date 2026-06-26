import {
  BrowseGrid,
  BrowseGridRow,
  BrowseHeading,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import { pageDescription, pageTitle } from "./data";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { getAllPosts, toProjectCardProps } from "@/utils/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  const projects = getAllPosts();
  const codeProjects = projects
    .filter((project) => project.category === "code")
    .map(toProjectCardProps);
  const designProjects = projects
    .filter((project) => project.category === "design")
    .map(toProjectCardProps);

  return (
    <BrowseGrid>
      <BrowseHeading title={pageTitle} description={pageDescription} />
      <BrowseGridRow title="Code">
        {codeProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BrowseGridRow>
      <BrowseGridRow title="Design">
        {designProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BrowseGridRow>
    </BrowseGrid>
  );
}
