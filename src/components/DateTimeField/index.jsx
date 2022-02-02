import {
  DesktopDatePicker,
  DesktopDateTimePicker,
  DesktopTimePicker,
  LocalizationProvider,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/material";
import { useState } from "react";
import TextField from "../TextField";

function DateTimeField() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex">
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDateTimePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField sx={{ width: 150 }} {...params} />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default DateTimeField;
