import { DatePicker as XDatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import cn from "clsx";

// types
import { DatePickerProps } from "./DatePicker.types";

// styles
import { useStyles } from "./DatePicker.styles";

const DatePicker = ({
  className = "",
  label,
  defaultValue,
  disabled = false,
  readOnly = false,
  views = ["year", "month", "day"],
  value,
  onChange,
}: DatePickerProps) => {
  const styles = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <XDatePicker
        className={cn(styles.root, className)}
        label={label}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={readOnly}
        views={views}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
};

export { DatePicker };
