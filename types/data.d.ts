export type ExperienceCardProps = {
  company: string;
  position: string;
  start: string;
  end?: string;
  description: string;
  technologies: string[];
};

export type ProjectCardProps = {
  title: string;
  links?: Link[];
  thumbnail?: string;
  description: string;
  technologies: string[];
};

export type Link = {
  type: string;
  url: string;
  ariaLabel?: string;
  icon?: ReactNode;
};

export type LinkIconProps = {
  name: string;
};
