import * as React from 'react';
import { Grid, SvgIcon, Typography } from '@mui/material';
import { Link } from 'gatsby-link';
import Logo from '../../assets/Logo.svg';

const links = [
  {
    name: 'about',
    link: '/about',
  },
  {
    name: 'code',
    link: '/code',
  },
  {
    name: 'design',
    link: '/design',
  },
  {
    name: 'resume',
    link: '/resume',
  },
];

export default function Header() {
  return (
    <header>
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to='/'>
            <SvgIcon sx={{ transform: 'scale(8)' }}>
              <Logo />
            </SvgIcon>
          </Link>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <nav>
            {links.map((linkData) => (
              <Link
                to={linkData.link}
                style={{ textDecoration: 'none' }}
                key={linkData.url}
              >
                <Typography
                  variant='h5'
                  component='div'
                  textAlign='end'
                  fontStyle='italic'
                  color='text.primary'
                  fontSize='1.75rem'
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
