import * as React from 'react';
import { Grid, Typography } from '@mui/material';

function ResumeGridMainContainer({ children }) {
  return (
    <Grid container spacing={2} sx={{ py: 5 }}>
      {children}
    </Grid>
  );
}

function ResumeGridRow({ children }) {
  return (
    <Grid container item spacing={8}>
      {children}
    </Grid>
  );
}

function ResumeSectionHeading({ children }) {
  return (
    <Grid item xs={6}>
      <Typography variant='h4'> {children} </Typography>
    </Grid>
  );
}

function ResumeLeftGridBody({ children }) {
  return (
    <Grid item xs={6}>
      <Typography variant='body2' align='right'>
        {children}
      </Typography>
    </Grid>
  );
}

function ResumeRightGridBody({ children }) {
  return (
    <Grid item xs={6}>
      <Typography variant='body2' align='left'>
        {children}
      </Typography>
    </Grid>
  );
}

export {
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeSectionHeading,
  ResumeLeftGridBody,
  ResumeRightGridBody,
};
