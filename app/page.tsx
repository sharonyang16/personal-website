import { Typography } from '@/components/base';
import NextLink from 'next/link';
import { ProjectCard } from '@/components/cards/ProjectCard';
import {
  BrowseGrid,
  BrowseGridRow,
  BrowseHeading,
} from '@/components/layout/BrowseGrid/BrowseGrid';
import { FaArrowRight } from 'react-icons/fa';
import { headline, highlightedProjects, summary } from './data';
import { Link } from 'unremarkable-ui';

export default function Home() {
  return (
    <BrowseGrid>
      <BrowseHeading title={headline} description={summary} isHomePage={true} />
      <BrowseGridRow
        title="Recent Projects"
        cta={
          <Link as={NextLink} href="/work" aria-label="All projects page">
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
