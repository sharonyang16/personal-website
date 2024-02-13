import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "gatsby-link";

const links = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "code",
    link: "/code",
  },
  {
    name: "design",
    link: "/design",
  },
  {
    name: "resume",
    link: "/resume",
  },
];

export default function Header() {
  return (
    <header>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Link to="/">
            <Typography variant="h4">Logo</Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <nav>
            {links.map((linkData) => (
              <Link to={linkData.link} style={{ textDecoration: "none" }}>
                {" "}
                <Typography
                  variant="h5"
                  component="div"
                  textAlign="end"
                  fontStyle="italic"
                  color="text.primary"
                  fontSize="1.75rem"
                >
                  {linkData.name}
                </Typography>
              </Link>
            ))}
          </nav>
        </Grid>
      </Grid>
    </header>
  );
}
