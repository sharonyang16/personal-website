import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f79256",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
