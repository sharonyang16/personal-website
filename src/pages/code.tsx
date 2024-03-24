import * as React from 'react';
import PageHeading from '../components/PageHeading';
import { Typography, Divider } from '@mui/material';
import ComingSoon from '../components/ComingSoon';
import ProjectCard from '../components/CodePage/ProjectCard';
import { projects } from '../data/ProgrammingProjects/ProjectsData';

export default function CodePage() {
  return (
    <>
      <PageHeading title='Code' />
      <Typography variant='subtitle1'>
        {
          "Here are some projects I've worked on over the years. I particularly like working on frontend related things."
        }
      </Typography>
      <Divider />
      {projects.map((project) => ProjectCard(project))}
      <ComingSoon />
    </>
  );
}
