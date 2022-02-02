import { Box, Divider, Typography } from "@mui/material";

function ReportDetails({ data }) {
  const Row = ({ label, value }) => (
    <Box display={value ? "flex" : 'none'} flexDirection="column" padding={2}>
      <Box display="flex" flexDirection="row">
        <Typography variant="h6" color="primary">{label}</Typography>
        <Typography sx={{ml: 2, fontWeight: "normal"}} variant="h6">{value}</Typography>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <Box paddingTop={5}>
      <Row label="Número de ofício:" value={data.officeNumber} />
      <Row label="Órgão:" value={data.agency} />
      <Row label="Data de início:" value={data.startDate} />
      <Row label="Delegado:" value={data.delegate} />
      <Row label="Delegacia:" value={data.policeStation} />
      <Row label="Arquivo:" value={data?.file?.name} />
    </Box>
  );
}

export default ReportDetails;
