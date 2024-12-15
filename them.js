import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3c81e1',
    },
    secondary: {
      main: '#f0ad4e',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3c81e1',
    },
    secondary: {
      main: '#f0ad4e',
    },
    background: {
      default: '#000',
      paper: '#121212',
    },
  },
});
