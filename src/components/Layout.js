import * as React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </main>
    </>
  );
}
