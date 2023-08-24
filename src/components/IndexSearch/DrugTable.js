import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { Loads } from "../loads";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    padding: "0px 12px 0px 0px",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "0px 12px 0px 0px",
    border: "1px solid grey",
    width: "10px",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    padding: "0px 15px 0px 0px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {},
}));
export default function DrugTable() {
  console.log("neo enter");
  const [drug, setDrug] = useState(null);
  const [drug1, setDrug1] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true); // New state variable for loading
  React.useEffect(() => {
    const fetchDrugData = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/drug`);
          if (response.ok) {
            const data = await response.json();
            setDrug(data);
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
    // Set isLoading to true before making the API call
    setDrug(null); // Clear the previous drug data before fetching new data
    fetchDrugData();
  }, [global.values?.code]);
  //all values of drug
  React.useEffect(() => {
    const fetchAllDetailsDrugData = async () => {
      try {
        const response = await fetch(`/codes/alldetails/drug`);
        if (response.ok) {
          const data = await response.json();
          setDrug1(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false); // Set isLoading to false when the API call is completed
      }
    };
    setIsLoading(true); // Set isLoading to true before making the API call
    setDrug1(null); // Clear the previous drug1 data before fetching new data
    fetchAllDetailsDrugData();
  }, []);
  console.log("our drug1 is", drug1);
  console.log("our drug is", drug);
  const handleAlphabetSelection = (alphabet) => {
    console.log("Selected alphabet:", alphabet);
    // You can perform any additional actions here based on the selected alphabet
    // For example, you can filter the data based on the selected alphabet.
  };

  function getTitleFromNestedChild(row) {
    if (row.child?.child?.child?.child?.code) {
      return `${row.child.title}-${row.child.child.title}-${row.child.child.child.title}-${row.child.child.child.child.title}`;
    } else if (row.child?.child?.child?.code) {
      return `${row.child.title} - ${row.child.child.title} - ${row.child.child.child.title}`;
    } else if (row.child?.child?.code) {
      return `${row.child.title} - ${row.child.child.title}`;
    } else if (row.child?.code) {
      return `${row.child.title}`;
    } else {
      return row.title;
    }
  }

  return (
    <div
      style={{
        width: "49vw",
        marginTop: "-10%",
      }}
    >
      <TextField
        sx={{
          width: "15%",
          marginLeft: "10px",
          "& input": {
            height: "10px",
            bgcolor: "background.paper",
            marginTop: "-5%",
            color: (theme) =>
              theme.palette.getContrastText(theme.palette.background.paper),
          },
        }}
        placeholder="Use Filter"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          height: "60vh",
          marginLeft: "1%",
        }}
      >
        <TableContainer
          sx={{
            height: "65vh",
            overflowY: "auto",
          }}
        >
          <TableHead
            sx={{ height: "1px", border: "1px solid grey", width: "10px" }}
          >
            <TableRow
              sx={{
                border: "1px solid grey",
              }}
            >
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                }}
                align="center"
              >
                D-Index
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",

                  width: "20px",
                }}
                align="center"
              >
                Accidental, UnIntentional Poisoning
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                }}
                align="center"
              >
                Intentional ,Selfharm Poisoning
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",

                  width: "20px",
                }}
                align="center"
              >
                Assault Poisoning
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",

                  width: "20px",
                }}
                align="center"
              >
                Undetermined Poisoning
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",

                  width: "20px",
                }}
                align="center"
              >
                Adverse Effect
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                }}
                align="center"
              >
                UnderDosing
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {global.values?.code !== null &&
              drug
                ?.filter((item) => {
                  return (
                    search.toLowerCase() === "" ||
                    item.title.toLowerCase().includes(search)
                  );
                })
                .map((row) => {
                  // Check if the parent or child code array has a value of null
                  const hasValidParentCode = row.code && row.code[0] !== "null";
                  const hasValidChildCode =
                    row.child && row.child.code && row.child.code[0] !== "null";
                  const hasValidChildChildCode =
                    row.child &&
                    row.child.child &&
                    row.child.child.code &&
                    row.child.child.code[0] !== "null";
                  const hasValidChildChildChildCode =
                    row.child &&
                    row.child.child &&
                    row.child.child.child &&
                    row.child.child.child.code &&
                    row.child.child.child.code[0] !== "null";
                  const hasValidChildChildChildChildCode =
                    row.child &&
                    row.child.child &&
                    row.child.child.child &&
                    row.child.child.child.child &&
                    row.child.child.child.child.code &&
                    row.child.child.child.child.code[0] !== "null";
                  // Filter out rows where all code arrays (parent, child, child.child, child.child.child, and child.child.child.child) are null
                  if (
                    !(
                      hasValidParentCode ||
                      hasValidChildCode ||
                      hasValidChildChildCode ||
                      hasValidChildChildChildCode ||
                      hasValidChildChildChildChildCode
                    )
                  ) {
                    return null;
                  }
                  // Concatenate the values of the code array into a single string
                  const codeDetails = (
                    hasValidChildChildChildChildCode
                      ? row.child.child.child.child.code
                      : hasValidChildChildChildCode
                      ? row.child.child.child.code
                      : hasValidChildChildCode
                      ? row.child.child.code
                      : hasValidChildCode
                      ? row.child.code
                      : row.code
                  ).join(", ");
                  // Split the codeDetails into chunks of six elements
                  const chunkedCodeDetails = codeDetails
                    .split(", ")
                    .reduce((acc, code) => {
                      if (!acc.length || acc[acc.length - 1].length === 6) {
                        acc.push([code]);
                      } else {
                        acc[acc.length - 1].push(code);
                      }
                      return acc;
                    }, []);
                  return chunkedCodeDetails.map((chunk, index) => (
                    <StyledTableRow key={`${row.id}_${index}`}>
                      <StyledTableCell component="th" scope="row" sx={{}}>
                        {getTitleFromNestedChild(row)}
                      </StyledTableCell>
                      {Array.from({ length: 6 }).map((_, colIndex) => (
                        <StyledTableCell
                          key={`${row.id}_${index}_${colIndex}`}
                          sx={{
                            border: chunk[colIndex] ? "1px solid grey" : "none",
                            width: colIndex === 0 ? "50px" : "20px", // Set default width for D-Index column
                          }}
                          align="center"
                        >
                          {chunk[colIndex] || "-"}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ));
                })}
            {!global.values?.code &&
              drug1
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.title.toLowerCase().includes(search);
                })
                .map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row" width="20px">
                      {row.title}
                    </StyledTableCell>
                    {row.code.map((value, index) => (
                      <StyledTableCell key={index} sx={{}} align="center">
                        {value !== "--" ? (
                          <a
                            style={{
                              borderBottom: "0.5px solid blue",
                            }}
                          >
                            {value}
                          </a>
                        ) : (
                          "--"
                        )}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
          </TableBody>
          {isLoading && <Loads />}
          {global.values?.code !== null && drug && drug.length === 0 && (
            <Typography
              marginLeft={30}
              fontWeight={800}
              variant="caption"
              color={" #90B2D8"}
            >
              No Drug codes found for the given search criteria.
            </Typography>
          )}
          {!global.values?.code && drug && drug1.length === 0 && (
            <Typography variant="caption" fontWeight={800} color={"#90B2D8"}>
              No Drug codes available in the data.
            </Typography>
          )}
        </TableContainer>
      </div>
    </div>
  );
}
