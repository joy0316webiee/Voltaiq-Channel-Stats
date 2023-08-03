import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { DatePicker } from ".";

export default {
  component: DatePicker,
  title: "atoms/DatePicker",
};

export const Default = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <DatePicker
      label="Date Picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
