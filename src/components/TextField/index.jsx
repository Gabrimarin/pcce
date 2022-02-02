import { Box, FormLabel, TextField as MUITextField } from "@mui/material";
import propTypes from "prop-types";

function TextField({
  type = "text",
  value,
  onChange,
  label,
  placeholder,
  style = {},
  sx = {},
  ...props
}) {
  return (
    <Box sx={[{ display: "flex", alignItems: "center" }, { ...style }]}>
      <FormLabel>{label}</FormLabel>
      <MUITextField
        value={value || ""}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        variant="standard"
        sx={[{ ml: 2 }, sx]}
        {...props}
      />
    </Box>
  );
}

TextField.propTypes = {
  type: propTypes.string,
  label: propTypes.string,
  style: propTypes.object,
};

export default TextField;
