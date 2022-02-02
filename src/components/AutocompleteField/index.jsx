import { Autocomplete, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import TextField from "../TextField";
import httpClient from "../../http";

function AutocompleteField({ label, endpoint, value, onChange, ...props }) {
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      const response = await httpClient.get(endpoint);
      setOptions(response.data);
    };
    if (!loading) {
      return undefined;
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [endpoint, loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={options}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      value={value || null}
      disablePortal
      id="combo-box-demo"
      sx={{ width: 300 }}
      loading={loading}
      onChange={(e, val) => {
        onChange(val);
        if (val) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <div>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </div>
            ),
          }}
        />
      )}
    />
  );
}

export default AutocompleteField;
