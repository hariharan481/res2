import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Tab,
  Tabs,
  Button,
} from "@mui/material";
import { useState } from "react";
import "../App.css";
import "../styles/Main.css";
import DrugTable from "./DrugTable";
import IndexTables from "./IndexTables";

import "../styles/IndexSearch.css";
import NeoplasmTable from "./IndexSearch/NeoplasamTable";
import IndexTables1 from "./IndexSearch/IndexTables1";
export const IndexSearch = (isValueSelected) => {
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);
  const handleIndexClick = () => {
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };
  const handleTableClick = () => {
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleDrugClick = () => {
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShowIndex(false);
    setShowTable(false);
    setShowdrug(false);
  };

  return (
    <div className="indexpage">
      <button className="btn1"
        onClick={handleIndexClick}
        >
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">{showIndx && <IndexTables1 />}</div>
      <button  className="btn2"
        onClick={handleTableClick}
      >
        {showTable ? "" : ""}
        Neoplasam
      </button>
      {showTable && <NeoplasmTable />}
      <button className="btn3"
      
        onClick={handleDrugClick}
      >
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div className="drugcontainer">{showDrug && <DrugTable />}</div>
    </div>
  );
};
