import qs from "qs";

export const capitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateReportUrl = (channelIds: string[]) => {
  const queryParams = qs.stringify(
    { channelId: channelIds },
    { arrayFormat: "repeat" }
  );
  return `/report/?${queryParams}`;
};
