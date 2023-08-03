import { createTheme } from "@mui/material/styles";

// colors
import { colors } from "./colors";

// breakpoints
import { breakpoints } from "./breakpoints";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
    step: 0,
  },
  palette: {
    primary: {
      main: colors.black100,
    },
    secondary: {
      main: colors.black200,
    },
    warning: {
      main: colors.orange100,
    },
    info: {
      main: colors.blue100,
    },
    text: {
      primary: colors.black100,
      secondary: colors.black200,
      disabled: colors.grey300,
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
    },
    divider: colors.grey50,
    background: {
      default: colors.white,
    },
  },
});
