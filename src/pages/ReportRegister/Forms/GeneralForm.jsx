import { Box, Button, FormControl } from "@mui/material";
import TextField from "../../../components/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateField from "../../../components/DateField";
import ptBR from "date-fns/locale/pt-BR";
import AutocompleteField from "../../../components/AutocompleteField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../../store/slices/forms";

const FormRow = ({ children }) => (
  <Box display="flex" flexDirection="row" mb={2} alignItems="center">
    {children}
  </Box>
);

function GeneralForm({ id }) {
  const dispatch = useDispatch();
  const { forms } = useSelector((state) => state.forms);
  const initialState = forms[id].state || {};
  const [localState, setLocalState] = useState(initialState);

  useEffect(() => {
    return () => {
      dispatch(setForm({ form: id, data: localState || forms[id].state }));
    };
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLocalState({ ...localState, [name]: value });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <FormControl>
        {id === 'office' && (
          <FormRow>
            <TextField
              value={localState["officeNumber"]}
              label="Número de Ofício:"
              type="text"
              name="officeNumber"
              placeholder="Ex: 99/TJCE"
              onChange={handleChange}
            />
            <TextField
              value={localState["agency"]}
              type="text"
              name="agency"
              label="Órgão:"
              placeholder="Nome do órgão emissor por extenso"
              style={{ marginLeft: 5 }}
              onChange={handleChange}
              sx={{ width: 300 }}
            />
          </FormRow>
        )}
        <FormRow marginTop={2}>
          <DateField
            onChange={(val) => {
              setLocalState((prev) => ({
                ...prev,
                startDate: val,
              }));
            }}
            value={localState["startDate"]}
            name="startDate"
            label="Início dos acontecimentos:"
          />
        </FormRow>
        <FormRow>
          <AutocompleteField
            endpoint="police_chiefs"
            name="delegate"
            label="Delegado responsável:"
            onChange={(val) => {
              setLocalState((prev) => ({
                ...prev,
                delegate: val,
              }));
            }}
            value={localState["delegate"]}
          />
        </FormRow>
        <FormRow>
          <AutocompleteField
            endpoint="police_stations"
            name="policeStation"
            label="Delegacia do Procedimento:"
            onChange={(val) => {
              setLocalState((prev) => ({
                ...prev,
                policeStation: val,
              }));
            }}
            value={localState["policeStation"]}
          />
        </FormRow>
        {id !== 'narrative' && (
          <FormRow>
            <Button variant="outlined" component="label">
              Upload File
              <input
                type="file"
                hidden
                name="input"
                onChange={(event) => {
                  console.log(event.currentTarget.files[0])
                  setLocalState((prev) => ({
                    ...prev,
                    [event.target.name]: event.currentTarget.files[0],
                  }));
                }}
              />
            </Button>
          </FormRow>
        )}
        {/* <a href={localState[input]} target='_blank' rel='noopener noreferrer'></a> */}
        <Button type="submit" variant="contained">Enviar</Button>
      </FormControl>
    </LocalizationProvider>
  );
}

export default GeneralForm;
