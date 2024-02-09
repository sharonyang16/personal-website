import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3c91e6",
      contrastText: "#ecf0f1",
    },
    secondary: {
      main: "#f79256",
    },
    text: {
      primary: "#424651",
      secondary: "#545454",
    },
    background: { main: "#ecf0f1" },
  },
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),

    subtitle1: {
      fontSize: "2rem",
      textAlign: "justify",
      fontWeight: "normal",
      color: "secondary",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          textTransform: "none",
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: "2px",
        },
      },
    },
  },
});

export default theme;
