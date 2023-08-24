import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../App.css";
import React, { useEffect, useState } from "react";

const Codedet2 = ({ match }) => {
  const [codeDetails, setCodeDetails] = useState(null);
  console.log("enter codedet page");
  console.log(global.index, "codedet index value");
  const [result, setResult] = useState(null);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const fetchCodeDetails = async () => {
      try {
        const response = await fetch(
          `/codes/${match.params.code}/details/?version=${global.years}`
        );
        if (response.ok) {
          const data = await response.json();
          setCodeDetails(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCodeDetails();
  }, [match.params.code]);

  if (!codeDetails) {
    return null; // Handle loading state
  }

  const handleClose = () => {
    setIsClosed(true);
    window.location.reload();
  };

  console.log("our result is", result);
  return (
    <div className="division">
      {!isClosed &&
        global.values &&
        global.values.code &&
        global.intableresult == null && (
          <div>
            <div>
              <Button
                disableFocusRipple
                disableRipple
                sx={{
                  border: "0.5px solid green",
                  textAlign: "center",
                  height: "20px",
                  width: "80px",
                  backgroundColor: "#ADD8E6",
                  marginLeft: "125px",
                }}
              >
                {global.values.code}
                <Close
                  sx={{
                    width: "20px",
                    ml: "5px",
                    color: "#4169E1",
                  }}
                  onClick={handleClose}
                />
              </Button>
            </div>
            <table style={{ marginLeft: "230px" }}>
              <tbody>
                {result && (
                  <tr key={result.code}>
                    <td>{result.code}</td>
                    <td>{result.longDescription}</td>
                    {/*<td>
                    {result.billable === true ? (
                      <Button
                        variant="contained"
                        sx={{
                          width: "150px",
                          height: "15px",
                          color: "white",
                          fontFamily: "sans-serif",
                          ml: "20px",
                          backgroundColor: "green",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                      >
                        Billable Codes
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        disableElevation
                        disableFocusRipple
                        sx={{
                          width: "150px",
                          height: "15px",
                          color: "white",
                          fontFamily: "sans-serif",
                          ml: "170px",
                          backgroundColor: "orange",
                          textTransform: "lowercase",
                          fontWeight: "700px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "orange",
                          },
                        }}
                      >
                        NonBillable Codes
                      </Button>
                    )}
                      </td>*/}
                    <td>
                      {result.billable === true ? (
                        <Button
                          variant="contained"
                          sx={{
                            width: "150px",
                            height: "15px",
                            color: "white",
                            fontFamily: "sans-serif",
                            ml: "20px",
                            backgroundColor: "green",
                            textTransform: "lowercase",
                            fontWeight: "700px",
                            textAlign: "center",
                            "&:hover": {
                              backgroundColor: "green",
                            },
                          }}
                        >
                          Billable Codes
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          disableElevation
                          disableFocusRipple
                          sx={{
                            color: "white",
                            width: "150px",
                            height: "15px",
                            fontFamily: "sans-serif",
                            backgroundColor: "orange",
                            textTransform: "lowercase",
                            fontWeight: "700px",
                            textAlign: "center",
                            "&:hover": {
                              backgroundColor: "orange",
                            },
                          }}
                        >
                          NonBillable Codes
                        </Button>
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
    </div>
  );
};
export default Codedet2;
