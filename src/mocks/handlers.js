import { rest } from "msw";

import channels from "./channels.json";
import batches from "./batches.json";
import batteries from "./batteries.json";

const getBatteries = ({ channelIds, batchIds, startDate, endDate }) =>
  batteries.filter((battery) => {
    if (batchIds && batchIds.length > 0) {
      if (!batchIds.includes(battery.batch)) {
        return false;
      }
    }
    const split = battery.batch.split("-");
    if (channelIds && channelIds.length > 0) {
      const channel = split.slice(0, -3).join("-");
      if (!channelIds.includes(channel)) {
        return false;
      }
    }
    const bDate = new Date(split.slice(-3).join("-"));
    return bDate >= startDate && bDate <= endDate;
  });

const getStartAndEndDate = (searchParams) => {
  let startDate = searchParams.get("startDate");
  let endDate = searchParams.get("endDate");

  startDate = startDate ? new Date(startDate) : null;
  endDate = endDate ? new Date(endDate) : null;

  return [startDate, endDate];
};

export const handlers = [
  rest.get("/api/batches", (req, res, ctx) => {
    let startDate = req.url.searchParams.get("startDate");
    let endDate = req.url.searchParams.get("endDate");
    const channelIds = req.url.searchParams.getAll("channelId");
    let results = batches;
    if (channelIds.length > 0) {
      results = results.filter((batch) => channelIds.includes(batch.channel));
    }
    if (startDate) {
      startDate = new Date(startDate);
      results = results.filter((r) => new Date(r.date) >= startDate);
    }
    if (endDate) {
      endDate = new Date(endDate);
      results = results.filter((r) => new Date(r.date) <= endDate);
    }
    return res(
      ctx.json(
        results.map((b) => {
          const _batteries = batteries.filter(
            (bat) => bat.batch === `${b.channel}-${b.date}`
          );
          return {
            ...b,
            passing: _batteries.filter((bat) => bat.qc_pass).length,
            failing: _batteries.filter((bat) => !bat.qc_pass).length,
          };
        })
      )
    );
  }),

  rest.get("/api/channels", (req, res, ctx) => {
    return res(ctx.json(channels));
  }),

  rest.get("/api/channel_report", (req, res, ctx) => {
    /**
     * Get a Report of Battery Pass/Fail for a given date range.
     * Optionally filtering to a sub set of Channels
     * Example request to get report for channels "CH1" and "CH2" between June 2022 and June 2023
     * /channel_report?startDate=2022-06-01&endDate=2023-06-01&channelId=CH1&channelId=CH2
     */

    const channelIds = req.url.searchParams.getAll("channelId");

    const [startDate, endDate] = getStartAndEndDate(req.url.searchParams);
    if (!startDate || !endDate) {
      return res(
        ctx.status(400),
        ctx.json({ error: "startDate and endDate are required" })
      );
    }

    const _batteries = getBatteries({ channelIds, startDate, endDate });
    const passing = _batteries.filter((battery) => battery.qc_pass);
    const failing = _batteries.filter((battery) => !battery.qc_pass);

    const report = {
      startDate,
      endDate,
      total: _batteries.length,
      passing: passing.length,
      failing: failing.length,
      byChannel: channels.map((channel) => ({
        channel: channel.id,
        passing: passing.filter((battery) =>
          battery.batch.startsWith(channel.id)
        ).length,
        failing: failing.filter((battery) =>
          battery.batch.startsWith(channel.id)
        ).length,
      })),
    };

    return res(ctx.json(report));
  }),
];
