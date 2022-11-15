import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    white: {
      main: "#fff",
    },
    primary: {
      main: "#060845",
    },
    secondary: {
      main: "#FBDC47",
    },
    tertiary: {
      main: "#12383E",
    },

    dark: {
      main: "#303030",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1537,
    },
  },
});
export default theme;
