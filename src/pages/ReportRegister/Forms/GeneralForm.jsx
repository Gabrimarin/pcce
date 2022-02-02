import { Box, Button, FormControl, Typography } from "@mui/material";
import TextField from "../../../components/TextField";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateField from "../../../components/DateField";
import ptBR from "date-fns/locale/pt-BR";
import AutocompleteField from "../../../components/AutocompleteField";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../../store/slices/forms";
import { db } from "../../../data/db";

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
  const filesElement = useRef(null);

  useEffect(() => {
    return () => {
      dispatch(setForm({ form: id, data: localState || forms[id].state }));
    };
  });

  function handleChangeFile(e) {
    setLocalState((prev) => ({ ...prev, file: e.currentTarget.files[0] }));
  }

  const handleChange = (e) => {
    console.log(2)
    const value = e.target.value;
    const name = e.target.name;
    setLocalState({ ...localState, [name]: value });
  };

  async function addFriend() {
    try {
      await db.reports.add({ ...localState, origin: id });
      alert("Ocorrência adicionada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit() {
    addFriend();
    dispatch(setForm({ form: id, data: {} }));
    setLocalState({});
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <FormControl onSubmit={handleSubmit}>
        {id === "office" && (
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
        {id !== "narrative" && (
          <FormRow>
            <Button variant="outlined" component="label">
              Selecionar Arquivo
              <input
                type="file"
                ref={filesElement}
                hidden
                multiple
                name="input"
                onChange={handleChangeFile}
              />
            </Button>
            <div>
              {localState["file"] && (
                <Typography sx={{ ml: 2 }}>
                  {localState?.["file"]?.name || "Nenhum arquivo selecionado"}
                </Typography>
              )}
            </div>
          </FormRow>
        )}
        <Button variant="contained" sx={{ width: 100 }} onClick={handleSubmit}>
          Enviar
        </Button>
      </FormControl>
    </LocalizationProvider>
  );
}

export default GeneralForm;
