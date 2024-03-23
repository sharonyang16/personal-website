import * as React from 'react';
import PageHeading from '../components/PageHeading';
import BoldItalics from '../components/BoldItalics';
import { Typography, Button, Box, Divider } from '@mui/material';
import { navigate } from 'gatsby';
import ComingSoon from '../components/ComingSoon';
export default function IndexPage() {
  return (
    <>
      <PageHeading title="Hi, I'm Sharon!" />
      <Typography variant='subtitle1'>
        I'm a <BoldItalics>Computer Science + Design</BoldItalics> student at{' '}
        <BoldItalics>Northeastern University</BoldItalics> with an interest in{' '}
        <BoldItalics>Web Development</BoldItalics> and{' '}
        <BoldItalics>UI/UX Design</BoldItalics>.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', py: '2rem' }}>
        <Button
          variant='contained'
          size='large'
          onClick={() => navigate('/about')}
        >
          more about me
        </Button>
      </Box>
      <Divider />
      <ComingSoon />
    </>
  );
}
