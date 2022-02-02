import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import propTypes from "prop-types";

function OriginSelector({ origins, selected, onChange }) {
  return (
    <Box display="flex" alignItems="center">
      <FormLabel component="legend">{"Origem da denúncia:"}</FormLabel>
      <RadioGroup row sx={{ ml: 1 }}>
        {Object.keys(origins).map((key) => (
          <FormControlLabel
            label={origins[key].label}
            control={
              <Radio
                key={key}
                value={key}
                checked={selected === key}
                onChange={() => onChange(key)}
              >
                {origins[key].label}
              </Radio>
            }
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

OriginSelector.propTypes = {
  origins: propTypes.objectOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      form: propTypes.elementType,
    })
  ).isRequired,
  selected: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default OriginSelector;
