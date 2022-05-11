import { createTheme, responsiveFontSizes } from '@mui/material';

interface CustomThemeProps {
  headerHeight: number;
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

const spacingAmount = 8;

let theme = createTheme({
  spacing: spacingAmount,
  palette: {
    mode: 'dark',
    primary: {
      main: '#e72582',
    },
    secondary: {
      main: '#AC67AA',
    },
    divider: '#524749',
    text: {
      primary: '#ffffff',
      secondary: '#adadad',
    },
    background: {
      default: '#231F20',
      paper: '#231F20',
    },
  },
  typography: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: 20,
    h1: {
      fontSize: 84,
      fontWeight: 600,
    },
    h2: {
      fontSize: 60,
      fontWeight: 600,
    },
    h3: {
      fontSize: 52,
      fontWeight: 600,
    },
    h4: {
      fontSize: 30,
      fontWeight: 400,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 17,
      fontWeight: 400,
    },
    body1: {
      fontSize: 26,
    },
    body2: {
      fontSize: 16,
      letterSpacing: 0.6,
    },
    button: {
      letterSpacing: 2.5,
      fontWeight: 'bold',
      fontSize: 18,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

theme = createTheme(theme, {
  custom: {
    headerHeight: 74,
    space: (n: number) => n * spacingAmount,
    backgroundGradient: `repeating-linear-gradient(
      -70deg,
      ${theme.palette.primary.main},
      ${theme.palette.primary.main} 20px,
      ${theme.palette.primary.light} 20px,
      ${theme.palette.primary.light} 40px
    )`,
  },
  palette: {},
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: 75,
          display: 'flex',
          justifyContent: 'center',
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: theme.palette.text.primary,
          borderWidth: 3,
          '&:hover': {
            borderWidth: 3,
          },
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
  },
});

theme = responsiveFontSizes(theme);

export default theme;
