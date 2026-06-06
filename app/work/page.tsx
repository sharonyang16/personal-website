import {
  BrowseGrid,
  BrowseGridRow,
  BrowseHeading,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import { codeData, designData, pageDescription, pageTitle } from "./data";
import { ProjectCard } from "@/components/cards/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <BrowseGrid>
      <BrowseHeading title={pageTitle} description={pageDescription} />
      <BrowseGridRow title="Code">
        {codeData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BrowseGridRow>
      <BrowseGridRow title="Design">
        {designData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BrowseGridRow>
    </BrowseGrid>
  );
}
