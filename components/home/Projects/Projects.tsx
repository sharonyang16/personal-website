"use client";
import Link from "next/link";
import { highlightedProjects } from "./data";
import ProjectSection from "./ProjectSection";
import { Typography } from "@/components/base";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <ProjectSection
        title="Recent Projects"
        projects={highlightedProjects}
        cta={
          <Link href="/code" aria-label="Code projects ">
            <div className="flex gap-2 items-center">
              <Typography intent="label1">See All</Typography>
              <FaArrowRight />
            </div>
          </Link>
        }
      />
    </>
  );
};

export default Projects;
