import { FaFigma } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import { LinkIconProps } from '../types/data';

export const ProjectLinkIcon = ({ name }: LinkIconProps) => {
  switch (name) {
    case 'github':
      return <FaCode className="text-xl" />;
    case 'live':
      return <MdArrowOutward className="text-xl" />;
    case 'figma':
      return <FaFigma className="text-xl" />;
    default:
      return <div></div>;
  }
};

export const toAriaLabel = (projectName: string, linkType: string) => {
  switch (linkType) {
    case 'github':
      return `Visit ${projectName} Github repository`;
    case 'live':
      return `Visit ${projectName} live site`;
    case 'figma':
      return `View Figma prototype for ${projectName}`;
    default:
      return `${projectName} ${linkType}`;
  }
};
