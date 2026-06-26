import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from '@/types/data';

export const links: Link[] = [
  {
    type: 'GitHub',
    url: 'https://github.com/sharonyang16',
    ariaLabel: 'GitHub profile',
    icon: FaGithub,
  },
  {
    type: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sharonyyang/',
    ariaLabel: 'LinkedIn profile',
    icon: FaLinkedin,
  },
  {
    type: 'Email',
    url: 'mailto:sharonyyang0@gmail.com',
    ariaLabel: 'Send an email to Sharon',
    icon: MdEmail,
  },
];
