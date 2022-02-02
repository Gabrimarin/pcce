import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AuthsTable from "../../components/AuthsTable";
import HeaderTitle from "../../components/HeaderTitle";
import { changeForm } from "../../store/slices/forms";
import GeneralForm from "./Forms/GeneralForm";
import OriginSelector from "./Forms/OriginSelector";

function ReportRegister() {
  const { currentForm, forms } = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  let formObjects = { ...forms };

  Object.keys(forms).forEach((key) => {
    formObjects[key] = {
      ...forms[key],
      form: <GeneralForm id={key} key={key} />,
    };
  });

  const handleChangeOrigin = (key) => {
    dispatch(changeForm(key));
  };

  return (
    <Box display="flex" flexDirection="column">
      <HeaderTitle>Registro Boletim Ocorrência</HeaderTitle>
      <OriginSelector
        onChange={handleChangeOrigin}
        origins={forms}
        selected={currentForm}
      />
      {formObjects[currentForm]?.form}
      <Box height={8} />
      <Box marginTop={'auto'} marginBottom={2}>
        <AuthsTable />
      </Box>
    </Box>
  );
}

export default ReportRegister;
