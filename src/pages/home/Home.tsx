import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GridColDef, GridRenderCellParams, GridRowId } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

// components
import { Heading, DataTable } from "@/components";

// context
import { useChannels } from "@/context";

// helpers
import { capitalizeString, generateReportUrl } from "@/helpers";

// styles
import { useStyles } from "./Home.styles";

const Home = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const { channels, isLoading } = useChannels();

  const navigate = useNavigate();

  const styles = useStyles();

  const onTableRowSelectionChange = (channelIds: GridRowId[]) => {
    setSelectedChannels(channelIds as string[]);
  };

  const onViewReport = () => {
    navigate(generateReportUrl(selectedChannels));
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Channel",
      flex: 1.5,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        return capitalizeString(params.row.status);
      },
    },
    {
      field: "view",
      headerName: "View",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Link
            className={styles.viewLink}
            to={generateReportUrl([params.row.id])}
          >
            View
          </Link>
        );
      },
    },
  ];

  return (
    <div className={styles.root}>
      <Heading className={styles.title} level="lg">
        Channels
      </Heading>
      <DataTable
        className={styles.channelTable}
        columns={columns}
        rows={channels}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={onTableRowSelectionChange}
      />
      <Button
        className={styles.btnViewReport}
        variant="text"
        disabled={selectedChannels.length < 1}
        onClick={onViewReport}
      >
        VIEW REPORT
      </Button>
    </div>
  );
};

export { Home };
