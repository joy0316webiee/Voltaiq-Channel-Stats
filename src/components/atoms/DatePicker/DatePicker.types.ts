import { Dayjs } from "dayjs";
import { DatePickerProps as XDatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { DateView } from "@mui/x-date-pickers/models";

export interface DatePickerProps extends XDatePickerProps<Dayjs> {
  className?: string;
  label?: string;
  defaultValue?: Dayjs;
  disabled?: boolean;
  views?: DateView[];
  value?: Dayjs | null;
  onChange?: (value: Dayjs | null) => void;
}
