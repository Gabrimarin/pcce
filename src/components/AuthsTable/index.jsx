import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";

function AuthsTable() {
  function createData(matricula, autorizado, cargo, validade) {
    return { matricula, autorizado, cargo, validade };
  }

  const rows = [
    createData("2191029", "Fulano da Silva", "Delegado", null),
    createData("2191039", "Ciclano da Silva", "Escrivão", new Date()),
    createData("2191049", "Beltrano da Silva", "Inspetor", new Date()),
  ];
  return (
    <TableContainer sx={{ border: 1, borderColor: '#777', width: '80%'}}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Matrícula</TableCell>
            <TableCell>Autorizado</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Validade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.matricula} sx={{ backgroundColor: i % 2 !== 0 ? 'white' : '#ddd'}}>
              <TableCell th>{row.matricula}</TableCell>
              <TableCell>{row.autorizado}</TableCell>
              <TableCell>{row.cargo}</TableCell>
              <TableCell>{row.validade ? row.validade.toLocaleDateString() : '---'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AuthsTable;
