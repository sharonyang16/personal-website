import * as React from 'react';
import { Grid, SvgIcon, Typography } from '@mui/material';
import { Link } from 'gatsby-link';
import Logo from '../../assets/Logo.svg';
import { links } from '../../data/Layout/HeaderData';

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
            {links.map((link) => (
              <Link
                to={link.url}
                style={{ textDecoration: 'none' }}
                key={link.name}
              >
                <Typography
                  variant='h5'
                  component='div'
                  textAlign='end'
                  fontStyle='italic'
                  color='text.primary'
                  fontSize='1.75rem'
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </nav>
        </Grid>
      </Grid>
    </header>
  );
}
