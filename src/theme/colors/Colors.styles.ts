import { makeStyles } from "@mui/styles";

// colors
import { colors } from ".";

export const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    overflow: "hidden",
  },
  cell: {
    width: "33.33%",
    margin: "0.7em 0",
    padding: "0 0.5em",
    boxSizing: "border-box",
  },
  content: {
    position: "relative",
    display: "block",
    marginBottom: "0.2em",
    height: "4em",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.06)",
  },
  hexCode: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: 500,
    color: colors.black200,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    color: colors.grey200,
  },
});
