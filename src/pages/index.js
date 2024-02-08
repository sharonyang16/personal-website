import * as React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          my website
        </Typography>
      </Box>
    </Container>
  );
}
