import React from "react";

import { Typography } from "@mui/material";

import "../styles/TabularSearch.css";

import Codedetails from "./TabularSearch/Codedetails";
import { Tabscontainer } from "./TabularSearch/Tabscontainer";
import { Tabscontainermobile } from "./Tabscontainermobile";

export const TabularSearchmobile = (isValueSelected) => {
  return (
    <div
      style={{
        display: "flex",
        height: "88vh",
        width: "90vw",
        backgroundColor: "white",
        border: "0.5px solid grey",
      }}
    >
      <Typography
        className="tabshead"
        variant="subtitle1"
        fontFamily={"sans-serif"}
        color={"black"}
        noWrap
      ></Typography>

      <div
        style={{
          height: "20vh",
          width: "55vw",
          marginTop: "10%",
          marginLeft: "-103%",
          border: "none",
        }}
      >
        <div
          style={{
            height: "3vh",
            width: "90vw",

            marginLeft: "5%",
          }}
        >
          <Typography
            variant="subtitle1"
            fontFamily={"sans-serif"}
            color={" #4185d2"}
            fontWeight={600}
            sx={{
              borderBottom: "0.5px solid grey",
            }}
          >
            code details
          </Typography>
        </div>

        {isValueSelected && <Codedetails />}
        <Tabscontainermobile />
      </div>
    </div>
  );
};
