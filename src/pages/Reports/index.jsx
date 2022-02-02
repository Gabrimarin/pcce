import { Button, IconButton, List, ListItem, Typography } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../data/db";
import { DataGrid } from "@mui/x-data-grid";

function Reports() {
  const reports = useLiveQuery(() => db.reports.toArray());
  const narrativeFields = [
    { field: "origin", headerName: "Origem" },
    { field: "startDate", headerName: "Data" },
    { field: "delegate", labheaderNameel: "Delegado" },
    { field: "policeStation", headerName: "Delegacia" },
    {
      field: "details",
      headerName: "Detalhes",
      disableClickEventBubbling: true,
      renderCell: ({ row }) => {
        return (
          <Button
          // style={{ display: "flex", margin: "auto" }}
          // onClick={() => onClick(row)}
          >
            Detalhes
          </Button>
        );
      },
    },
  ];
  // const officeFields = [
  //   { field: "startDate", label: "Data" },
  //   { field: "delegate", label: "Delegado" },
  //   { field: "policeStation", label: "Delegacia" },
  //   { field: "file", label: "Arquivo" },
  // ];
  // const crimeNewsFields = [
  //   { field: "officeNumber", label: "Número de ofício" },
  //   { field: "agency", label: "Órgão" },
  //   { field: "startDate", label: "Data" },
  //   { field: "delegate", label: "Delegado" },
  //   { field: "policeStation", label: "Delegacia" },
  //   { field: "file", label: "Arquivo" },
  // ];

  // const origins = {
  //   narrative: narrativeFields,
  //   office: officeFields,
  //   crimeNews: crimeNewsFields,
  // };

  // officeNumber: "",
  // agency: "",

  const columns = narrativeFields;
  const rows =
    (reports || [])?.map((report) => ({
      ...report,
      startDate: new Date(report.startDate).toLocaleDateString(),
      delegate: report.delegate.name,
      policeStation: report.policeStation.name,
    })) || [];

  return (
    <div style={{ height: 400, margin: "auto", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Reports;
