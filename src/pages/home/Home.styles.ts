import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

import { fontWeight } from "@/components";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: 36,
      fontWeight: fontWeight.BOLD,
    },
    channelTable: {
      width: "100%",
    },
    viewLink: {
      color: theme.palette.primary.main,
    },
    btnViewReport: {
      width: 120,
    },
  })
);
