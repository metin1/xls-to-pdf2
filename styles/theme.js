import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const globalTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 770,
      lg: 992,
      xl: 1440,
      xxl: 1920,
    },
    unit: "px",
    step: 6,
  },
  props: {
    MuiWithWidth: {
      initialWidth: "lg",
    },
    MuiButton: {
      root: {
        color: "#ae3320",
      },
      text: {
        padding: "9px 15px 9px 15px",
      },
      outlined: {
        padding: "9px 15px 9px 15px",
      },
    },

    MuiAppBar: {
      color: "transparent",

    },
  },

  status: {
    danger: "#e53e3e",
  },
  typography: {
    fontFamily: ["Open Sans", "Poppins"].join(","),
    htmlFontSize: 10,
    body1: {
      color: "#78625a",
      fontSize: "1.6rem",
      lineHeight: "1.77",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.6rem",
      color: "#b3b3b3",
      fontWeight: 400,
      lineHeight: "1.5",
      // lineHeight: "150%"
    },
    h1: {
      color: "#ae3320",
      fontSize: "4.9rem",
      fontWeight: 700,
      lineHeight: "0.97",
      // lineHeight: "97%"
    },
    h2: {
      color: "#1f536f",
      fontSize: "2.9rem",
      fontWeight: 600,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h3: {
      color: "#1f536f",
      fontSize: "2.4rem",
      fontWeight: 600,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h4: {
      color: "#b3b3b3",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h5: {
      fontFamily: "Open Sans",
      color: "#1f536f",
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: "1.07",
      // lineHeight: "107%"
    },
    h6: {
      fontFamily: "Open Sans",
      color: "#1f536f",
      fontSize: "1.1rem",
      fontWeight: 400,
      lineHeight: "1.07",
    },
    subtitle1: {
      color: "#78625a",
      fontSize: "1.6rem",
      lineHeight: "1.77",
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "Open Sans",
      color: "#212121",
      fontSize: "1.1rem",
      fontWeight: 600,
      lineHeight: "1.1",
    },
    caption: {
      color: "#78625a",
      fontSize: "1.6rem",
      fontStyle: "italic",
      lineHeight: "1.9",
      fontWeight: 400,
    },
    footerHead: {
      fontSize: "1.6rem",
      color: "#96a5aa",
      fontWeight: 600,
      lineHeight: "1.5",
    },
    footerText: {
      fontFamily: "Open Sans",
      fontSize: "1.5rem",
      color: "#e0e0e0",
      fontWeight: 600,
      lineHeight: "1.5",
      marginBottom: "9",
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    // MuiOutlinedInput: {
    //   focused: {
    //     border: "1px solid #1F536F",
    //   },
    //   "& $notchedOutline": {
    //     border: "1px solid #1F536F",
    //   },
    // },
    MuiTextField: {
      root: {
        textTransform: "none",
      },
    },
    MuiTab: {
      labelIcon: {
        minHeight: "44px",
      },
    },
    MuiButton: {
      root: {
        // backgroundColor: 'transparent',
        // minWidth: '185px',
        textTransform: "none",
        fontFamily: "Poppins",
      },
      text: {
        padding: "9px 15px ",
      },
      textPrimary: {
        color: "#78625a",
      },
      outlined: {
        padding: "9px 15px ",
      },
      contained: {
        padding: "9px 15px ",
      },
    },
    // MuiTableSortLabel-root.MuiTableSortLabel-active
    MuiTableSortLabel: {
      root: {
        color: "#78625a",
        "&:focus": {
          color: "#ff0000",
        },
        "&:active": {
          color: "#0000ff",
        },
        "&:hover": {
          color: "#78925a",
        },
      },
    },
  },

  spacing: (factor) => `${0.25 * factor}rem`,

  contrastThreshold: 4,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.3,
});

const defaultThemeSchema = createMuiTheme({
  ...globalTheme,
  palette: {
    primary: {
      main: "#ae3320",
      light: "#cc3c26",
      dark: "#992d1c",
    },
    secondary: {
      main: "#1F536F",
      light: "#517f9d",
      dark: "#002b44",
    },
    text: {
      primary: "#7D7168",
      secondary: "#A4A4A4",
      disabled: "#96A5AA",
      hint: "#96A5AA",
    },
    tetra: {
      main: "#3DB1B3",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "rgba(76,175,80,0.3)",
    },
    info: {
      main: "#2197f3",
      light: "rgba(33,151,243,0.3)",
    },
    warning: {
      main: "#ff9801",
      light: "rgba(255,152,1,0.3)",
    },
    error: {
      main: "#f34335",
      light: "rgba(243,67,53,0.3)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 770,
      lg: 992,
      xl: 1440,
      xxl: 1920,
    },
  },
});

const lightThemeSchema = createMuiTheme({
  ...globalTheme,
  palette: {
    type: "light",

    primary: {
      main: "#ae3320",
      light: "#cc3c26",
      dark: "#992d1c",
    },
    secondary: {
      main: "#1F536F",
      light: "#517f9d",
      dark: "#002b44",
    },
    text: {
      primary: "#7D7168",
      secondary: "#A4A4A4",
      disabled: "#96A5AA",
      hint: "#96A5AA",
    },
    tetra: {
      main: "#3DB1B3",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "rgba(76,175,80,0.3)",
    },
    info: {
      main: "#2197f3",
      light: "rgba(33,151,243,0.3)",
    },
    warning: {
      main: "#ff9801",
      light: "rgba(255,152,1,0.3)",
    },
    error: {
      main: "#f34335",
      light: "rgba(243,67,53,0.3)",
    },
  },
});

const darkThemeSchema = createMuiTheme({
  ...globalTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#d46d4f",
      contrastText: "#e0e0e0",
    },
    secondary: {
      main: "#95b3e2",
      contrastText: "rgba(22,22,22,0.87)",
    },
    text: {
      primary: "#dca586",
      secondary: "#d4cab5",
      disabled: "#7c898e",
      hint: "#cecece",
    },
    success: {
      main: "#357A38",
      light: "rgba(76,175,80,0.3)",
    },
    info: {
      main: "#1769AA",
      light: "rgba(33,151,243,0.3)",
    },
    warning: {
      main: "#B26A00",
      light: "rgba(255,152,1,0.3)",
    },
    error: {
      main: "#AA2E25",
      light: "rgba(243,67,53,0.3)",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "Poppins"].join(","),
    body: {
      fontFamily: "Poppins",
      fontsize: "1.6rem",
    },
    htmlFontSize: 10,
    body1: {
      color: "#b3b3b3",
      fontSize: "1.6rem",
      lineHeight: "1.77",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.6rem",
      color: "#b3b3b3",
      fontWeight: 400,
      lineHeight: "1.5",
      // lineHeight: "150%"
    },
    h1: {
      color: "#cc3c26",
      fontSize: "4.9rem",
      fontWeight: 700,
      lineHeight: "0.97",
      // lineHeight: "97%"
    },
    h2: {
      color: "#517f9d",
      fontSize: "2.9rem",
      fontWeight: 600,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h3: {
      color: "#517f9d",
      fontSize: "2.4rem",
      fontWeight: 600,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h4: {
      color: "#b3b3b3",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "1.05",
      // lineHeight: "104%"
    },
    h5: {
      fontFamily: "Open Sans",
      color: "#517f9d",
      fontSize: "1.3rem",
      fontWeight: 700,
      lineHeight: "1.07",
      // lineHeight: "107%"
    },
    h6: {},
    subtitle1: {},
    subtitle2: {},
  },
});

export const darkTheme = responsiveFontSizes(darkThemeSchema);
export const defaultTheme = responsiveFontSizes(defaultThemeSchema);
export const lightTheme = responsiveFontSizes(lightThemeSchema);
