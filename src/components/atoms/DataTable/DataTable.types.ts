import {
  DataGridProps as XDataGridProps,
  GridColDef,
  GridInitialState,
} from "@mui/x-data-grid";

export interface DataTableProps extends XDataGridProps {
  className?: string;
  columns: GridColDef[];
  rows: any[];
  initialState?: GridInitialState;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  loading?: boolean;
}
