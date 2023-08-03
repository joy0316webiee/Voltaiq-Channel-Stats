import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

// types
import { fontWeight } from "./Typography.types";

interface StyleProps {
  weight?: fontWeight;
  level: "lg" | "md" | "sm";
}

const headingFontSize = {
  lg: 34,
  md: 24,
  sm: 18,
};

const textFontSize = {
  lg: 22,
  md: 16,
  sm: 14,
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      color: theme.palette.text.primary,
      fontWeight: ({ weight }: StyleProps) => weight,
      lineHeight: 1,
    },
    heading: {
      color: theme.palette.text.primary,
      fontSize: ({ level }: StyleProps) => headingFontSize[level],
    },
    text: {
      color: theme.palette.text.primary,
      fontSize: ({ level }: StyleProps) => textFontSize[level],
    },
  })
);
