import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

import { fontWeight } from "@/components";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    title: {
      marginTop: 20,
      color: theme.palette.text.primary,
      fontSize: 36,
      fontWeight: fontWeight.BOLD,
    },
    btnPermalinks: {
      position: "absolute",
      right: 100,
      top: 100,
    },
    filterContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
    },
    filters: {
      display: "flex",
      alignItems: "center",
    },
    errorMessage: {
      color: theme.palette.warning.main,
      fontSize: 14,
    },
    content: {
      marginTop: 20,
      width: "100%",
      flex: 1,
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      gap: 40,
    },
    chartContainer: {
      width: 500,
    },
    tableContainer: {
      flex: 1,
    },
  })
);
