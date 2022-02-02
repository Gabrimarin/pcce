import { Box, Icon, IconButton } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../data/db";
import HeaderTitle from "../../components/HeaderTitle";
import { useState } from "react";
import ReportTable from "../ReportTable";
import ReportDetails from "../ReportDetails";

function Reports() {
  const [onDetail, setOnDetail] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleDetailClick = (row) => {
    setSelected(row);
    setOnDetail(true);
  };

  const handleGoBack = () => {
    setOnDetail(false);
  };

  const reports = useLiveQuery(() => db.reports.toArray());

  return (
    <Box>
      <Box display="flex">
        {onDetail && (
          <IconButton onClick={handleGoBack}>
            <Icon>arrow_back</Icon>
          </IconButton>
        )}
        <HeaderTitle>Registros</HeaderTitle>
      </Box>
      {onDetail ? (
        <ReportDetails data={selected} onGoback={handleGoBack} />
      ) : (
        <ReportTable reports={reports} onDetailClick={handleDetailClick} />
      )}
    </Box>
  );
}

export default Reports;
