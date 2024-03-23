import React from 'react';
import { ThemeProvider } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Layout from './src/components/Layout/Layout';
import theme from './theme';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element} </ThemeProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout path={props.location.pathname}>
      <AnimatePresence mode='wait'>{element}</AnimatePresence>
    </Layout>
  );
};
