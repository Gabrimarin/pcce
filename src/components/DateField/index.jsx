import {DesktopDateTimePicker} from "@mui/lab";
import TextField from "../TextField";
import PropTypes from "prop-types";

function DateField({ value, onChange, label, name, ...props }) {
  return (
    <DesktopDateTimePicker
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} {...props} label={label} />}
    />
  );
}

DateField.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateField;
