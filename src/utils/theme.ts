import { createTheme, responsiveFontSizes } from '@mui/material';

interface CustomThemeProps {
  space: (n: number) => number;
  backgroundGradient: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomThemeProps;
  }
  interface ThemeOptions {
    custom?: Partial<CustomThemeProps>;
  }
}

const spacingAmount = 4;

let theme = createTheme({
  spacing: spacingAmount,
  palette: {
    mode: 'light',
    primary: {
      main: '#d35337',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff80',
    },
  },
  typography: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: 18,
    h6: {
      fontSize: 17,
    },
  },
  shape: {
    borderRadius: 15,
  },
});

theme = createTheme(theme, {
  custom: {
    space: (n: number) => n * spacingAmount,
    backgroundGradient: `repeating-linear-gradient(
      -45deg,
      #e8e8e8,
      #e8e8e8 75px,
      #e0e0e0 75px,
      #e0e0e0 150px
    )`,
  },
  palette: {},
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'primary',
      },
      styleOverrides: {
        root: {
          height: 65,
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: `${theme.spacing(1.5)} 32px ${theme.spacing(
            1.5,
          )} ${theme.spacing(3)} !important`,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          background: theme.palette.background.default,
          transform: `translate(14px, 6px) scale(1)`,
        },
        shrink: {
          transform: `translate(14px, -9px) scale(0.75)`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        startIcon: {
          position: 'absolute',
          left: theme.spacing(4),
          top: '50%',
          transform: 'translateY(-50%)',
          margin: 'unset',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          background: theme.palette.background.default,
          '::before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 4),
          minHeight: '48px !important',
        },
        content: {
          margin: `${theme.spacing(3, 0)} !important`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
