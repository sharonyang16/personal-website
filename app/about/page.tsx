import { Link, Typography } from "@/components/base";
import {
  BrowseGrid,
  BrowseGridRow,
  BrowseHeading,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import {
  education,
  experiences,
  pageDescription,
  pageTitle,
  resumeDownloadUrl,
} from "./data";
import { MdDownloading } from "react-icons/md";
import { ExperienceCard } from "@/components/cards/ExperienceCard";

export default function About() {
  return (
    <BrowseGrid>
      <BrowseHeading title={pageTitle} description={pageDescription} />
      <BrowseGridRow
        title="Experience"
        cta={
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
        }
      >
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company + experience.position}
            {...experience}
          />
        ))}
      </BrowseGridRow>
      <BrowseGridRow title="Education">
        {education.map((edu) => (
          <ExperienceCard key={edu.company + edu.position} {...edu} />
        ))}
      </BrowseGridRow>
    </BrowseGrid>
  );
}
