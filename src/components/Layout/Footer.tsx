import * as React from 'react';
import { Grid, Box, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Copyright from './Copyright';

interface FooterLink {
  icon: any;
  url: string;
}

const links: FooterLink[] = [
  {
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/sharonyang16/',
  },
  {
    icon: <GitHubIcon />,
    url: 'https://github.com/sharonyang16',
  },
];

export default function Footer() {
  return (
    <footer>
      <Grid container sx={{ pb: 2 }}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            {links.map((link) => (
              <Link
                href={link.url}
                color='text.secondary'
                target='_blank'
                rel='noreferrer'
                sx={{ ml: 2 }}
                key={link.url}
              >
                {link.icon}
              </Link>
            ))}
          </Box>
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  );
}
