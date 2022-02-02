import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { originBinding } from "../../utils/originBinding";

function ReportTable({ reports, onDetailClick }) {
  const columns = [
    { field: "origin", headerName: "Origem", flex: 1 },
    { field: "startDate", headerName: "Data", flex: 1 },
    { field: "delegate", headerName: "Delegado", flex: 1 },
    { field: "policeStation", headerName: "Delegacia", flex: 1 },
    {
      field: "details",
      headerName: "Detalhes",
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: ({ row }) => {
        return <Button variant="contained" onClick={() => onDetailClick(row)}>Detalhes</Button>;
      },
    },
  ];
  const rows =
    (reports || [])?.map((report) => ({
      ...report,
      origin: originBinding[report.origin],
      startDate: new Date(report?.startDate)?.toLocaleDateString(),
      delegate: report?.delegate?.name,
      policeStation: report?.policeStation?.name,
    })) || [];

  return (
    <div style={{ height: 400, margin: "auto", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default ReportTable;
