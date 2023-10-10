import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#F65261",
  secondary: "#424242",
  success: "#4CAF50",
  white: "#FFFFFF",
  grey: "#555555",
  body_bg: "#232323",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
});

export default theme;