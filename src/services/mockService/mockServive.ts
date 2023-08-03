import axios from "axios";
import qs from "qs";

// types
import { ReportQueryParams } from "./mockService.types";

// config
import config from "@/config";

const request = axios.create({
  baseURL: config.api.baseURL,
  timeout: config.api.timeout,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },
});

const mockService = {
  getChannels: (): Promise<Channel[]> => {
    return new Promise((resolve, reject) => {
      request
        .get("/channels")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getBatches: ({
    startDate,
    endDate,
    channels,
  }: ReportQueryParams): Promise<Batch[]> => {
    return new Promise((resolve, reject) => {
      request
        .get("/batches", {
          params: {
            startDate,
            endDate,
            channelId: channels,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getChannelReport: ({
    startDate,
    endDate,
    channels,
  }: ReportQueryParams): Promise<ChannelReport> => {
    return new Promise((resolve, reject) => {
      request
        .get("/channel_report", {
          params: {
            startDate,
            endDate,
            channelId: channels,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export { mockService };
