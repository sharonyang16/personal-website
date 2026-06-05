import {
  BrowseGrid,
  BrowseGridRow,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import { codeData, designData } from "./data";
import ProjectCard from "@/components/home/Projects/ProjectCard";

export default function Work() {
  return (
    <BrowseGrid>
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
