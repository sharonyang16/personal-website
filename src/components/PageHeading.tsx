import * as React from 'react';
import { Typography } from '@mui/material';

interface PageHeadingProps {
  title: String;
}

export default function PageHeading(props: PageHeadingProps) {
  return (
    <>
      <Typography
        variant='h1'
        align='left'
        fontWeight='bold'
        color='text.primary'
      >
        {props.title}
      </Typography>
    </>
  );
}
