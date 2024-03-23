import * as React from 'react';
import { Grid, Typography } from '@mui/material';

function ResumeGridMainContainer({ children }: { children: React.ReactNode }) {
  return (
    <Grid container spacing={2} sx={{ py: 5 }}>
      {children}
    </Grid>
  );
}

function ResumeGridRow({ children }: { children: React.ReactNode }) {
  return (
    <Grid container item spacing={8}>
      {children}
    </Grid>
  );
}

function ResumeSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Grid item xs={6}>
      <Typography variant='h4'> {children} </Typography>
    </Grid>
  );
}
function ResumeCompanyHeading({ children }: { children: React.ReactNode }) {
  return (
    <Grid item xs={6}>
      <Typography variant='h5'> {children} </Typography>
    </Grid>
  );
}
function ResumeLeftGridBody({ children }: { children: React.ReactNode }) {
  return (
    <Grid item xs={6}>
      <Typography variant='body1' align='right'>
        {children}
      </Typography>
    </Grid>
  );
}

function ResumeRightGridBody({ children }: { children: React.ReactNode }) {
  return (
    <Grid item xs={6}>
      <Typography variant='body1' align='left'>
        {children}
      </Typography>
    </Grid>
  );
}

export {
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeSectionHeading,
  ResumeCompanyHeading,
  ResumeLeftGridBody,
  ResumeRightGridBody,
};
