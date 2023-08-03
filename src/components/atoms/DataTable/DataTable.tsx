import { DataGrid } from "@mui/x-data-grid";
import cn from "clsx";

// types
import { DataTableProps } from "./DataTable.types";

// styles
import { useStyles } from "./DataTable.styles";

const DataTable = ({
  className = "",
  columns = [],
  rows = [],
  initialState,
  pageSizeOptions,
  checkboxSelection = false,
  loading = false,
  ...rest
}: DataTableProps) => {
  const styles = useStyles();

  return (
    <DataGrid
      className={cn(styles.root, className)}
      columns={columns}
      rows={rows}
      initialState={initialState}
      pageSizeOptions={pageSizeOptions}
      checkboxSelection={checkboxSelection}
      loading={loading}
      {...rest}
    />
  );
};

export { DataTable };
