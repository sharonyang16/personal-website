import * as React from 'react';
import { Typography, Box, Button, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PageHeading from '../components/PageHeading';
import ResumeSkillsSection from '../components/ResumePage/ResumeSkillsSection';
import ResumeEducationSection from '../components/ResumePage/ResumeEducationSection';
import ResumeExperiencesSection from '../components/ResumePage/ResumeExperiencesSection';

const GOOGLE_DRIVE_ID = '1-cVdFp3Avcyp9dnqoPlh3LC8ncg4uxal';

export default function ResumePage() {
  return (
    <>
      <PageHeading title='Resume' />
      <Typography variant='subtitle1'>
        Here is an up-to-date version of my resume that includes details about
        my education, skills, and experiences thus far.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', py: '2rem' }}>
        <Button
          href={`https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_ID}`}
          variant='contained'
          size='large'
          endIcon={<DownloadIcon />}
        >
          download
        </Button>
      </Box>
      <Divider />
      <ResumeEducationSection />
      <Divider />
      <ResumeSkillsSection />
      <Divider />
      <ResumeExperiencesSection />
    </>
  );
}