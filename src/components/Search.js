import {
  Autocomplete,
  Box,
  IconButton,
  ListItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
import { Main } from "./Main";
const Search = () => {
  const [result1, setResult1] = useState([]);
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [word1, setWord1] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [isDescriptionFetched, setIsDescriptionFetched] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

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
  console.log(word);
  useEffect(() => {
    global.inatbleresult = null;
    const fetchBooks = async () => {
      try {
        if (word) {
          let response;
          //const regex = /^[a-zA-Z]$|^[a-zA-Z]+\d+$/;
          const regex =
            /^[a-zA-Z]$|^[a-zA-Z]+\d+$|^[a-zA-Z]+\d+[a-zA-Z]+$|^[a-zA-Z]+\d+[a-zA-Z]+\d+$/;
          if (regex.test(word)) {
            response = await fetch(`/codes/${word}/matches`);
          }
          //else if (/^[a-zA-Z]{3}$/.test(word)|| word.length > 3) {
          //   response = await fetch(`/codes/${word}/description`);
          //   setIsDescriptionFetched(true);
          // }
          else if (/^[a-zA-Z]{2}$/.test(word) || word.length > 3) {
            response = await fetch(
              `/codes/index/search/name?name=${word}&mainTermSearch=true`
            );
            setIsDescriptionFetched(true);
          } else {
            console.error("Invalid input");
            return;
          }
          if (response.ok) {
            const data = await response.json();
            setResult(data);
          } else {
            console.error("Failed to fetch data");
          }
        } else {
          setResult([]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [word]);
  console.log("our result is", result);
  console.log("our result is", result);
  console.log(first);
  global.values = first;
  console.log(global.values && global.values.code);
  console.log(word);
  global.words = word;

  const options = [...result];

  return (
    <>
      <Box
        sx={{
          height: "80px",

          marginTop: "29px",
          ml: "130px",
        }}
      >
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
                width: "89vw",
              },
            }}
            onChange={handleChange}
            placeholder="Search for code"
            value={selectedItem ? selectedItem.title : word}
            inputProps={{
              autoComplete: "off", // Disable browser autocomplete
            }}
          />
          <Autocomplete
            id="users"
            defaultValue={null}
            getOptionLabel={(item) =>
              `${item.title}  ${item.level}  ${item.seealso || ""}   ${
                item.id
              }  ${item.description} ${item.code} ${item.nemod}`
            }
            options={result}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            isoptionequalToValue={(option, value) =>
              option.description === value.description
            }
            noOptionsText={"PLEASE ENTER VALID CODES"}
            open={open}
            onInputChange={(_, value) => {
              if (value.length === 0) {
                if (open) setOpen(false);
              } else {
                if (!open) setOpen(true);
              }
            }}
            onClose={() => setOpen(false)}
            onChange={(event, newValue) => {
              setSelectedItem(newValue); // Set the selected item's data to the state variable
              setWord(newValue ? newValue.title : ""); // Update the TextField value with the selected item's title
            }}
            autoSelect
            renderInput={(params) => (
              <TextField
                disabled
                sx={{
                  "& input": {
                    height: "0px",

                    display: "none",
                    mt: "-50px",
                    border: "none",
                  },
                }}
                {...params}
                placeholder="Search for code"
              />
            )}
            renderOption={(props, item) => (
              <ListItem {...props}>
                {item.id} {item.description}
                {item.title} {item.level ? ` ${item.level}` : ""}
                {item.seealso && ` ${item.seealso}`}
                {/* Display seealso if it's not null */}
                {item.code && ` ${item.code}`}
                {/* Display code if it's not null */}
                {item.nemod && ` ${item.nemod}`}
                {/* Display nemod if it's not null */}
              </ListItem>
            )}
          />
        </Box>
      </Box>

      <Main isValueSelected={isValueSelected} />
    </>
  );
};
export default Search;
