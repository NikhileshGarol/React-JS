import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "29px",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "29px",
        },
      },
    },
  },
});

export default theme;
