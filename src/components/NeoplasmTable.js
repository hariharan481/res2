import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { Pagin } from "./pagination";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import"../styles/Neoplasm.css"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    padding: "0px 12px 0px 0px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height: 1,
    border: "1px solid grey",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    height: 1,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    height: 1,
  },
}));
export default function NeoplasmTable() {
  console.log("neo enter");
  // console.log(global.values.code);
  const [neo, setNeo] = useState(null);
  const [codes, setCodes] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/neoplasm`);
          if (response.ok) {
            const data = await response.json();
            setNeo(data);
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
  console.log("our neo is", neo);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <div className="neoplasmpagincontainer"
  
      >
        <Pagin />
      </div>
      <TableContainer className="tablecontainer">
        <Table className="tablewrapper" >
          <TableHead sx={{ height: "5px", minHeight: "10px" }}>
            <TableRow>
              <div>
                <div className="table">
                  <div className="tablehead1"
                  
                  >
                    <Stack direction={"row"}>
                      <div className="tablehead2"
                        
                      >
                        <TextField
                          sx={{
                            width: "120px",
                            "& input": {
                              height: "4px",
                              bgcolor: "background.paper",
                              color: (theme) =>
                                theme.palette.getContrastText(
                                  theme.palette.background.paper
                                ),
                            },
                          }}
                          placeholder="filter"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <div>
                        {" "}
                        <Typography className="type1"
                          variant="subtitle1"
                          sx={{
                           
                          }}
                        >
                          maligant
                        </Typography>
                      </div>
                      <div className="box1">
                        <div className="box2"
                          sx={{
                           
                          }}
                        ></div>
                      </div>
                      <div>
                        <div className="box3"
                          sx={{
                       
                          }}
                        ></div>
                      </div>
                      <div>
                        <Typography className="typ2"
                          variant="subtitle1"
                          color="black"
                          sx={{
                           
                          }}
                        >
                          Behaviour
                        </Typography>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </TableRow>
          </TableHead>
          <TableHead  className="Tablehead3" >
            <TableRow
              sx={{
                border: "1px solid grey",
                height: "20px",
              }}
            >
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
              >
                N-Term
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Primary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Secondary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Cainsitu
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                benigin
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unsertain
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unspecified
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {neo
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  {row.code.split(",").map((value, index) => (
                    <StyledTableCell
                      key={index}
                      sx={{
                        border: "1px solid grey",
                        height: "auto",
                      }}
                      align="right"
                    >
                      {value.trim()}{" "}
                      {/* Use .trim() to remove any leading/trailing spaces */}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      
    </>
  );
}
