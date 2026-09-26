'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2152FF',
      light: '#4E75FF',
      dark: '#1438CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0F172A',
      light: '#1E293B',
      dark: '#020617',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FDFDFD',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
    info: {
      main: '#3B82F6',
      light: '#EFF6FF',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '10px 24px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(33, 82, 255, 0.25)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          border: '1px solid #F1F5F9',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          fontWeight: 500,
        },
      },
    },
  },
});
