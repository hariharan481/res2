import { Box, List, ListItem, TextField, Autocomplete } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import axios from "axios";

const Search2 = () => {
  const [result1, setResult1] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");

  const handlePopoverOpen = () => {
    setAnchorEl(true);
  };

  const handlePopoverClose = () => {
    setAnchorEl(false);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setWord(newValue);

    if (newValue.length === 0) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/codes/title/${word}`, {
          mode: "no-cors",
        });
        if (response.ok) {
          const data = await response.json();
          setResult1(data.levelTerms);
          setResult(data.mainTerms);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [word]);

  const levelTermOptions = result1.map((item) => ({
    ...item,
    source: "Level Term",
  }));

  const mainTermOptions = result.map((item1) => ({
    ...item1,
    source: "Main Term",
  }));

  const options = [...levelTermOptions, ...mainTermOptions];

  return (
    <Box sx={{ height: "80px", position: "static", marginTop: "5px" }}>
      <Box
        sx={{ margin: "auto", color: "black", mt: "20px" }}
        direction="column"
        gap={5}
      >
        <TextField
          onFocus={handlePopoverOpen}
          sx={{
            "& input": {
              height: "5px",
              width: "97vw",
            },
          }}
          onChange={handleChange}
          placeholder="Search for code"
          value={word}
          inputProps={{
            autoComplete: "off", // Disable browser autocomplete
          }}
        />
        <Autocomplete
          popupIcon={false}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          id="search-autocomplete"
          options={options}
          getOptionLabel={(item, result) =>
            `${item.title} (${item.source}) ${item.level}  ${
              item.seealso || ""
            }   ${item.id}  ${result.id} ${result.description}`
          }
          noOptionsText={"PLEASE ENTER VALID CODES"}
          open={Boolean(anchorEl)}
          onClose={handlePopoverClose}
          onInputChange={(_, value) => {
            setWord(value);
            if (value.length === 0) {
              if (open) setOpen(false);
            } else {
              if (!open) setOpen(true);
            }
          }}
          onChange={(event, newValue) => {
            setSelectedOption(newValue);
            setWord(newValue.title);
          }}
          renderInput={(params) => (
            <TextField
              disabled
              sx={{
                "& input": {
                  height: "0px",
                  width: "95vw",
                  display: "none",
                  mt: "-50px",
                  border: "none",
                },
              }}
              {...params}
              placeholder="Search for code"
            />
          )}
          renderOption={(props, item, result) => (
            <ListItem {...props}>
              {item.title} ({item.source}) {item.level}
              {item.seealso} {result.id}
            </ListItem>
          )}
        />
      </Box>
    </Box>
  );
};

export default Search2;
