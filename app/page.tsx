import { Typography } from "@/components/base";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { ProjectCard } from "@/components/cards/ProjectCard";
import {
  BrowseGrid,
  BrowseGridRow,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import { FaArrowRight } from "react-icons/fa";
import { highlightedProjects } from "./data";

export default function Home() {
  return (
    <BrowseGrid>
      <div className="col-span-2">
        <Hero />
      </div>
      {/* Spacer */ <div />}
      <BrowseGridRow
        title="Recent Projects"
        cta={
          <Link href="/work" aria-label="All projects page">
            <div className="flex gap-2 items-center">
              <Typography intent="label1">See All</Typography>
              <FaArrowRight />
            </div>
          </Link>
        }
      >
        {highlightedProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </BrowseGridRow>
    </BrowseGrid>
  );
}
