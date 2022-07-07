import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import {Typography} from '@mui/material'

import App from './App';
import { useState } from 'react';
import { useEffect } from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fffff',
      main: '#3426F8',
      dark: '#1305DD',
    },
    secondary: {
      light: '#EEEEEE',
      main: '#ffff',
      dark: '#464646',
    
    },
  },

  
  typography:{
    fontFamily: [
      'Helvetica Neue,Helvetica,Arial,sans-serif'
    ]
}
  

}); 

theme.typography.h1 = {
  fontSize: '36px',
  lineHeight:'44px',
  '@media (min-width:600px)': {
    fontSize: '2.8125rem',
    lineHeight:'3.25rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.5625rem',
    lineHeight:'4rem'
  },
};
theme.typography.h2 = {
  fontSize: '24px',
  lineHeight:'32px',
  '@media (min-width:600px)': {
    fontSize: '1.75rem',
    lineHeight:'2.25rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    lineHeight:'2.5rem'
  },
};
theme.typography.h3 = {
  fontSize: '14px',
  lineHeight:'20px',
  fontWeight:'500',
  letterSpacing:'0.1px',
  '@media (min-width:600px)': {
    fontSize: '1rem',
    lineHeight:'1.5rem',
    fontWeight:'500',
    letterSpacing:'3/320rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
    lineHeight:'1.75rem',
    fontWeight:'400',
  },
};
theme.typography.h4 = {
  fontSize: '11px',
  lineHeight:'16px',
  fontWeight:'400',
  letterSpacing:'0.7px',

  '@media (min-width:600px)': {
    fontSize: '0.75rem',
    lineHeight:'1rem',
    fontWeight:'500',
    letterSpacing:'1/32rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875',
    lineHeight:'1.25rem',
    fontWeight:'500',
    letterSpacing:'1/160rem',
  },
};
theme.typography.h6 = {
  fontSize: '12px',
  lineHeight:'16px',
  fontWeight:'400',
  letterSpacing:'0.6px',
  '@media (min-width:600px)': {
    fontSize: '0.875rem',
    lineHeight:'1.875rem',
    fontWeight:'500',
    letterSpacing:'1/64rem'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1',
    lineHeight:'1.5rem',
    fontWeight:'400',
    letterSpacing:'1/32rem',
  },
};


export const primarys =  '#F50057'
export const seceends =  '#CFD8DC'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>

);

