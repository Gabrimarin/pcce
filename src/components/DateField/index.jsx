import {DesktopDateTimePicker} from "@mui/lab";
import TextField from "../TextField";

function DateField({ value, onChange, label, name, ...props }) {
  return (
    <DesktopDateTimePicker
      // inputFormat="dd/MM/yyyy hh:mm"
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} {...props} label={label} />}
    />
  );
}

export default DateField;
