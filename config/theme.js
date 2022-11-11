import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
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
    white: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
