import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: 320,
      minWidth: 360,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    title: {
      color: theme.palette.grey[400],
    },
    chartLoader: {
      position: "absolute",
      left: "50%",
      top: 100,
      transform: "translateX(-50%)",
    },
    legendContainer: {
      position: "absolute",
      right: 0,
      top: 60,
      padding: 0,
      display: "flex",
      alignItems: "start",
      flexDirection: "column",
      gap: 8,
    },
    legend: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    legendBox: {
      display: "block",
      width: 12,
      height: 12,
    },
    legendName: {
      fontSize: 13,
      color: theme.palette.grey[500],
    },
  })
);
