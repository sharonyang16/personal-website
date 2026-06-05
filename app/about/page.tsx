import { Link, Typography } from "@/components/base";
import {
  BrowseGrid,
  BrowseGridRow,
} from "@/components/layout/BrowseGrid/BrowseGrid";
import { education, experiences, resumeDownloadUrl } from "./data";
import { MdDownloading } from "react-icons/md";
import ExperienceCard from "@/components/home/Experiences/ExperienceCard";

export default function About() {
  return (
    <BrowseGrid>
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
        <ExperienceCard {...education} />
      </BrowseGridRow>
    </BrowseGrid>
  );
}
