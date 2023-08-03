import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      "& .MuiDataGrid-withBorderColor": {
        borderColor: theme.palette.divider,
      },
    },
  })
);
