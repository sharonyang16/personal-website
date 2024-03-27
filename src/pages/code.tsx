import * as React from 'react';
import PageHeading from '../components/PageHeading';
import { Divider } from '@mui/material';
import ProjectCard from '../components/CodePage/ProjectCard';
import { projects } from '../data/ProgrammingProjects/ProjectsData';
import { GridMainContainer } from '../components/Layout/GridFormatting';

export default function CodePage() {
  return (
    <>
      <PageHeading title='Code' />
      <Divider />
      <GridMainContainer>
        {projects.map((project) => ProjectCard(project))}
      </GridMainContainer>
    </>
  );
}
