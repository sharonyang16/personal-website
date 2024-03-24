import * as React from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Tooltip,
  useTheme,
} from '@mui/material';
import { format } from 'date-fns';
import { GitHub, Web } from '@mui/icons-material';
import { ProgrammingProjectInformation } from '../../data/ProgrammingProjects/ProjectsData';
import { GridRow } from '../Layout/GridFormatting';

export default function ProjectCard(project: ProgrammingProjectInformation) {
  const theme = useTheme();

  // left side
  function ProjectImage(project: ProgrammingProjectInformation) {
    return (
      <Grid item xs={6}>
        <Box
          sx={{
            height: '100%',
            marginBottom: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.secondary.main,
          }}
        >
          {project.googleDriveImageID ? (
            <img
              src={`https://drive.google.com/thumbnail?id=${project.googleDriveImageID}&sz=h200`}
              alt={`Screenshot of ${project.projectName}`}
            />
          ) : (
            <div></div>
          )}
        </Box>
      </Grid>
    );
  }

  // right side
  function ProjectDescription(project: ProgrammingProjectInformation) {
    /**
     * date is either...
     * "Month Year" - project completed in the same month as it was started
     * "Month Year - Month Year" - project completed in different month than it was started
     * "Month Year - Present" - project hasn't been completed/still currently contributing to it
     */
    const date = project.endDate
      ? project.endDate.getTime() === project.startDate.getTime()
        ? format(project.startDate, 'MMMM yyyy')
        : `${format(project.startDate, 'MMMM yyyy')} - ${format(
            project.endDate,
            'MMMM yyyy'
          )}`
      : `${format(project.startDate, 'MMMM yyyy')} - Present`;
    const buttonStyle = {
      fontSize: '1rem',
      '&.Mui-disabled': {
        pointerEvents: 'all',
      },
    };

    return (
      <Grid
        item
        xs={6}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant='h5' align='left'>
            {project.projectName}
          </Typography>
          <Typography variant='h6' align='left'>
            {date}
          </Typography>
          <Typography variant='body2' align='left'>
            {project.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            paddingY: 1,
            gap: 1,
          }}
        >
          <Tooltip
            title={project.githubLink ? '' : 'Available upon request'}
            arrow
            PopperProps={{ style: { pointerEvents: 'all' } }}
          >
            <Button
              variant='contained'
              startIcon={<GitHub />}
              href={
                project.githubLink
                  ? project.githubLink
                  : 'Available upon request'
              }
              target='_blank'
              rel='noreferrer'
              sx={{ ...buttonStyle }}
              disabled={project.githubLink ? false : true}
            >
              {'Code'}
            </Button>
          </Tooltip>

          {project.link && (
            <Button
              variant='contained'
              startIcon={<Web />}
              href={project.link}
              target='_blank'
              rel='noreferrer'
              sx={{
                ...buttonStyle,
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              Link
            </Button>
          )}
        </Box>
      </Grid>
    );
  }
  return (
    <GridRow>
      {ProjectImage(project)} {ProjectDescription(project)}
    </GridRow>
  );
}
