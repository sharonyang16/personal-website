"use client";
import { MdDownloading } from "react-icons/md";
import { Link, Typography } from "@/components/base";
import { experiences, resumeDownloadUrl } from "./data";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <>
      <div id="experience" className="flex flex-col gap-4 lg:py-8">
        <Typography intent="subheadding1">Experience</Typography>
        <Link
          variant="buttonSecondary"
          className="w-fit"
          href={resumeDownloadUrl}
          rel="noopener noreferrer"
          aria-label="Download Sharon's resume"
        >
          <div className="flex gap-2 items-center">
            <MdDownloading className="text-xl" />
            <Typography intent="label1">Resume</Typography>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-8 col-span-2 lg:py-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company + experience.position}
            {...experience}
          />
        ))}
      </div>
    </>
  );
};

export default Experiences;
