import * as React from "react";
import { Typography } from "@mui/material";

export default function PageHeading(props) {
  return (
    <>
      <Typography
        variant="h1"
        align="left"
        fontWeight="bold"
        color="text.primary"
      >
        {props.title}
      </Typography>
    </>
  );
}
