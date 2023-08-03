declare type Channel = {
  id: string;
  name: string;
  status: "running" | "stopped";
};

declare type Batch = {
  date: string;
  channel: string;
  passing: number;
  failing: number;
};

declare type ChannelReport = {
  startDate: string;
  endDate: string;
  total: number;
  passing: number;
  failing: number;
  byChannel: [
    {
      channel: string;
      passing: number;
      failing: number;
    }
  ];
};

declare module "notistack";
