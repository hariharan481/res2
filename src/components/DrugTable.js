import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { Pagin } from "./pagination";
import { useState } from "react";
import "../App.css";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    padding: "1px 12px 0px 0px",
    border: "1px solid grey",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid grey",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    height: "auto",
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));
export default function DrugTable() {
  const [drug, setDrug] = useState(null);
  const [codes, setCodes] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/drug`);
          if (response.ok) {
            const data = await response.json();
            setDrug(data);
            const codeValues = global.values.code.split(",");
            setCodes(codeValues);
          } else {
            console.error("Failed to fetch data");
          }
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values?.code]);
  console.log("our drug is", drug);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [search, setSearch] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <div style={{ marginleft: "100%" }}>
        <div
          className="conatinerdrug"
          style={{
            marginTop: "-10%",
          }}
        >
          <TextField
            sx={{
              width: "12%",
              marginLeft: "10px",
              marginTop: "25px",
              "& input": {
                height: "4px",
                bgcolor: "background.paper",
                //marginTop:"-5%",
                color: (theme) =>
                  theme.palette.getContrastText(theme.palette.background.paper),
              },
            }}
            placeholder="filter"
            onChange={(e) => setSearch(e.target.value)}
          />
          <table
            style={{
              marginLeft: "10px",
              marginTop: "0%",
              border: "1px solid black",
            }}
          >
            <TableHead sx={{ height: "2px" }}>
              <TableRow>
                <StyledTableCell width={"20px"} align="center">
                  D-Index
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  Accidental,Unindentional poisoning
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  Intentional,Selfharm poisoning
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  Assault poisoning
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  Undetermined poisoning
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  AdverseEffect
                </StyledTableCell>
                <StyledTableCell width={"20px"} align="center">
                  underDosing
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <tbody style={{ border: "1px solid black" }}>
              {drug
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map((row) => {
                  return (
                    <tr key={row.id} className="drugs">
                      <td> {row.title}</td>
                      {row.code.split(",").map((value, index) => {
                        return <td key={index}> {value.trim()} </td>;
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
