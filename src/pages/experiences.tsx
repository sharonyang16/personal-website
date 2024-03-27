import * as React from 'react';
import { Box, Button, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PageHeading from '../components/PageHeading';
import ResumeExperiencesSection from '../components/ResumePage/ResumeExperiencesSection';
import { RESUME_GOOGLE_DRIVE_ID } from '../data/Pages/ResumePageData';

export default function ExpereicnePage() {
  return (
    <>
      <PageHeading title='Experiences' />
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'end', py: '2rem' }}>
        <Button
          href={`https://drive.google.com/uc?export=download&id=${RESUME_GOOGLE_DRIVE_ID}`}
          variant='contained'
          size='large'
          endIcon={<DownloadIcon />}
        >
          download
        </Button>
      </Box>
      <ResumeExperiencesSection />
    </>
  );
}
