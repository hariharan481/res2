import React from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import Codenotes1 from "./Codesnotes1";
import Codenotesmobile from "./Codenotesmobile";
import Sectionnotesmobile from "./Sectionotesmobile";
import Chapternotesmobile from "./Chapternotesmobile";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Tabscontainermobile = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        height: "50vh",
        width: "90vw",
        marginTop: "2%",
        display: "flex",
        marginLeft: "5%",
      }}
    >
      <Box sx={{ width: "100vw" }}>
        <Box
          sx={{
            marginTop: "1%",

            background: "linear-gradient(to right, #E9F8FF,#90B2D8 , #C1E3FF)",

            width: "90vw",
            height: "3vh",
            color: "white",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs"
            textColor="white"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#4185d2",
                marginTop: "1%",
                width: "6%",
                marginLeft: "38px",
                marginBottom: "4%",
                color: "#4185D2",
              },
            }}
          >
            <Tab
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                cursor: "pointer",
                variant: "subtitle1",
                fontWeight: "700px",
                color: "white",
                textTransform: "none",
                width: "25%",
                marginTop: "-2%",
                color: "#4185D2",
              }}
              label="  Code notes"
              {...a11yProps(0)}
            />
            <Tab
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                cursor: "pointer",
                variant: "subtitle1",
                fontWeight: "700px",
                color: "white",
                textTransform: "none",
                width: "30%",
                marginTop: "-2%",
                color: "#4185D2",
              }}
              variant="subtitle1"
              fontWeight={"700"}
              label="Section notes"
              {...a11yProps(1)}
            />
            <Tab
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                cursor: "pointer",
                variant: "subtitle1",
                fontWeight: "700px",
                color: "white",
                textTransform: "none",
                width: "30%",
                marginTop: "-2%",
                color: "#4185D2",
              }}
              variant="subtitle1"
              fontWeight={"700"}
              label="Chapter notes"
              {...a11yProps(2)}
            />
            <Tab
              disableFocusRipple
              disableRipple
              disableTouchRipple
              sx={{
                cursor: "pointer",
                variant: "subtitle1",
                fontWeight: "700px",
                color: "white",
                textTransform: "none",
                width: "40%",
                marginTop: "-2%",
                color: "#4185D2",
              }}
              variant="subtitle1"
              fontWeight={"700"}
              label="Chapter guidlines"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <div
          style={{
            display: "flex",
            marginLeft: "-38%",
            textAlign: "left",
            paddingLeft: "56%",
            marginTop: "3%",
            overflowX: "hidden",
          }}
        >
          {" "}
          <CustomTabPanel value={value} index={0}>
            <Codenotesmobile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Sectionnotesmobile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Chapternotesmobile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}></CustomTabPanel>
        </div>
      </Box>
    </div>
  );
};
