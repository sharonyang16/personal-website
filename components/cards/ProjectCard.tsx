import Image from 'next/image';
import { Typography } from '@/components/base';
import { ProjectCardProps } from '@/types/data';
import { ProjectLinkIcon, toAriaLabel } from '@/utils/data.utils';
import { FaReadme } from 'react-icons/fa';
import NextLink from 'next/link';
import { Chip, Link } from 'unremarkable-ui';

export const ProjectCard = ({
  title,
  links,
  thumbnail,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-center items-center w-full aspect-video relative rounded-sm overflow-hidden bg-gray-200 dark:bg-gray-800 ">
        <div className="relative w-4/5 h-4/5 rounded-2xl">
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              className="object-contain"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 pl-1">
        <div className="flex justify-between items-end min-h-10">
          <Typography intent="subheadding2">{title}</Typography>
          <div className="flex gap-2">
            <Link
              href={`/work/${title
                .toLowerCase()
                .replaceAll(/[^\w ]/g, '')
                .replaceAll(/\s+/g, '-')}`}
              variant="iconButtonOutline"
              className="rounded-full flex items-center justify-center"
              as={NextLink}
            >
              <FaReadme />
            </Link>

            {links?.map((link) => (
              <Link
                key={`${title}-${link.type}`}
                variant="iconButtonOutline"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full"
                aria-label={toAriaLabel(title, link.type)}
              >
                <ProjectLinkIcon name={link.type} />
              </Link>
            ))}
          </div>
        </div>

        <Typography intent="paragraph2">{description}</Typography>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((name) => (
          <Chip variant="subtle" size="sm" key={name}>
            {name}
          </Chip>
        ))}
      </div>
    </div>
  );
};
