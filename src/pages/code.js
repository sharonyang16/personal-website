import * as React from 'react';
import PageHeading from '../components/PageHeading';
import { Typography, Divider } from '@mui/material';

export default function CodePage() {
  return (
    <>
      <PageHeading title='Code' />
      <Typography variant='subtitle1'>
        Here are some projects I've worked on over the years. I particularly
        like working on frontend related things.
      </Typography>
      <Divider />
    </>
  );
}
