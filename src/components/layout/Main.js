import * as React from 'react';
import { Grid } from '@mui/material';

export default function Main({ children }) {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </main>
  );
}
