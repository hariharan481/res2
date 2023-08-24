import React from "react";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TabsContainer.css";
import Chapternotes from "../Chapternotes";
import Codenotes from "../Codenotes";
import Sectionnotes from "../Sectionnotes";
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

export const Tabscontainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tabscontainer">
      <Box sx={{ width: "42vw" }}>
        <Box
          sx={{
            marginTop: "1%",
            background: "linear-gradient(to right, #E9F8FF,#90B2D8 , #C1E3FF)",
            width: "42vw",
            height: "3vh",
            color: "black",
            display: "flex",
            ml: "6px",
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

                textTransform: "none",
                width: "25%",
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
                color: "#4185D2",
                textTransform: "none",
                width: "25%",
                marginTop: "-2%",
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
                color: "#4185D2",
                textTransform: "none",
                width: "30%",
                marginTop: "-2%",
              }}
              variant="subtitle1"
              fontWeight={"700"}
              label="Chapter guidlines"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <div className="tabpanels">
          {" "}
          <CustomTabPanel value={value} index={0}>
            <Codenotes />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Sectionnotes />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Chapternotes />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}></CustomTabPanel>
        </div>
      </Box>
    </div>
  );
};
