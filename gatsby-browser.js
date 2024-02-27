import React from 'react';
import { ThemeProvider } from '@mui/material';
import Layout from './src/components/layout/Layout';
import theme from './theme';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element} </ThemeProvider>;
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
