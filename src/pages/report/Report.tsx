import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import { useSnackbar } from "notistack";
import { Dayjs } from "dayjs";

// components
import {
  Heading,
  Text,
  DatePicker,
  DataTable,
  ChannelPieChart,
} from "@/components";

// theme
import { colors } from "@/theme/colors";

// context
import { useChannels } from "@/context";

// helpers
import { generateReportUrl } from "@/helpers";

// services
import { mockService, ReportQueryParams } from "@/services";

// styles
import { useStyles } from "./Report.styles";

const Report = () => {
  const [channelIds, setChannelIds] = useState<string[]>([]);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [stats, setStats] = useState<ChannelReport | null>(null);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [isReportLoading, setIsReportLoading] = useState<boolean>(false);
  const [isBatchesLoading, setIsBatchesLoading] = useState<boolean>(true);

  const { channels, isLoading: isChannelsLoading } = useChannels();

  const location = useLocation();

  const { enqueueSnackbar } = useSnackbar();

  const styles = useStyles();

  const getChannelName = (channelId: string) => {
    return channels.find(({ id }) => id === channelId)?.name;
  };

  const generateQueryParams = (): ReportQueryParams => ({
    startDate: startDate?.format("YYYY-MM-DD") || null,
    endDate: endDate?.format("YYYY-MM-DD") || null,
    channels: channelIds,
  });

  const onChangeStartDate = (newStartDate: Dayjs | null) => {
    setStartDate(newStartDate);
    if (newStartDate?.isAfter(endDate)) {
      setEndDate(null);
    }
  };

  const onChangeEndDate = (newEndDate: Dayjs | null) => {
    setEndDate(newEndDate);
    if (newEndDate?.isBefore(startDate)) {
      setStartDate(null);
    }
  };

  const onCopyPermalink = async () => {
    try {
      const permalink = `${window.location.host}${generateReportUrl(
        channelIds
      )}`;
      await navigator.clipboard.writeText(permalink);
      enqueueSnackbar("Permalink copied to clipboard successfully!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Permalink copied to clipboard successfully!", {
        variant: "error",
      });
    }
  };

  const fetchChannelReport = async (queryParams: ReportQueryParams) => {
    setIsReportLoading(true);
    try {
      const newStats = await mockService.getChannelReport(queryParams);

      setStats(newStats);
      setIsReportLoading(false);
    } catch (error) {
      setIsReportLoading(false);
    }
  };

  const fetchBatches = async (queryParams: ReportQueryParams) => {
    setIsBatchesLoading(true);
    try {
      const newBatches = await mockService.getBatches(queryParams);
      const normBatches = newBatches.map((batch, id) => ({ ...batch, id }));

      setBatches(normBatches);
      setIsBatchesLoading(false);
    } catch (error) {
      setIsBatchesLoading(false);
    }
  };

  useEffect(() => {
    if (location.search) {
      const queryParams = new URLSearchParams(location.search);
      const selectedChannelIds = queryParams.getAll("channelId");
      setChannelIds(selectedChannelIds);
    }
  }, [location]);

  useEffect(() => {
    if (channelIds.length < 1) return;
    fetchBatches(generateQueryParams());
  }, [channelIds]);

  useEffect(() => {
    if (channelIds.length < 1) return;
    if (startDate && endDate) {
      const queryParams = generateQueryParams();
      fetchChannelReport(queryParams);
      fetchBatches(queryParams);
    }
  }, [startDate, endDate]);

  const columns: GridColDef[] = [
    {
      field: "channel",
      headerName: "Channel",
      flex: 3,
      renderCell: (params: GridRenderCellParams) => {
        return getChannelName(params.row.channel);
      },
    },
    {
      field: "date",
      headerName: "Batch Date",
      flex: 1,
    },
    {
      field: "passing",
      headerName: "Passing",
      flex: 1,
    },
    {
      field: "failing",
      headerName: "Failing",
      flex: 1,
    },
  ];

  return (
    <div className={styles.root}>
      <Heading className={styles.title} level="lg">
        {channelIds.length > 1 ? "Bulk Report" : getChannelName(channelIds[0])}
      </Heading>
      <Button
        className={styles.btnPermalinks}
        variant="text"
        startIcon={<ShareIcon />}
        onClick={onCopyPermalink}
      >
        Permalink
      </Button>
      <div className={styles.filterContainer}>
        <div className={styles.filters}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={onChangeStartDate}
          />
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={onChangeEndDate}
          />
        </div>
        {(!startDate || !endDate) && (
          <Text className={styles.errorMessage} level="sm">
            Please select start date and end date to see the report chart.
          </Text>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <ChannelPieChart
            title="Channel Pass/Fail Count"
            data={[
              {
                name: "Passing",
                value: stats?.passing || 0,
              },
              {
                name: "Failing",
                value: stats?.failing || 0,
              },
            ]}
            colors={[colors.blue100, colors.orange100]}
            loading={isReportLoading}
          />
        </div>
        <div className={styles.tableContainer}>
          <DataTable
            columns={columns}
            rows={batches}
            loading={isBatchesLoading || isChannelsLoading}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
          />
        </div>
      </div>
    </div>
  );
};

export { Report };
