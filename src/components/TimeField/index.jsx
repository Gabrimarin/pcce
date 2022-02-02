import { DesktopTimePicker } from "@mui/lab";
import { useField, useFormikContext } from "formik";
import TextField from "../TextField";

function TimeField({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DesktopTimePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      value={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      renderInput={(params) => <TextField {...params} sx={{ width: 120 }} />}
    />
  );
}

export default TimeField;
