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
    fontFamily: 'Atkinson Hyperlegible, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 30,
    },
    h3: {
      fontSize: 28,
    },
    h4: {
      fontSize: 24,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 15,
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
        multiline: {
          padding: '0 !important',
        },
        adornedEnd: {
          paddingRight: '0 !important',
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
        outlined: {
          background: theme.palette.background.default,
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
          padding: theme.spacing(0, 3),
          minHeight: '48px !important',
        },
        content: {
          margin: `${theme.spacing(3, 0)} !important`,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        icon: {
          alignItems: 'center',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          zIndex: 110,
          fontWeight: 'bold',
          background: theme.palette.background.default,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
