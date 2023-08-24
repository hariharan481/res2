import React from "react";
import { useState } from "react";
import "../styles/IndexSearch.css";
import { DrugTables } from "./DrugTables";
import IndexTables from "./IndexTables";
import NeoplasmTable from "./NeoplasamTable";
import CircularWithValueLabel from "./Spinner";
import { useEffect } from "react";
import IndexTablesmobile from "./IndexMobile";
import NeoplasmTablemobile from "./Neoplasmmobile";
import { DrugTablesmobile } from "./DrugTablemobile";

export const IndexSearchm = () => {
  const [value, setValue] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [showIndx, setShowIndex] = useState(false);
  const [showDrug, setShowdrug] = useState(false);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const helloHandeler = () => {
    setLoading(!loading);
    setShow(!show);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    }
  }, [loading]);

  if (loading) return;

  <CircularWithValueLabel />;

  return (
    <div
      style={{
        height: "40vh",
        width: "100vw",
      }}
    >
      <button className="btn1" onClick={handleIndexClick}>
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">
        {showIndx && <IndexTablesmobile />}
      </div>
      <button className="btn2" onClick={handleTableClick}>
        {showTable ? "" : ""}
        Neoplasam
      </button>

      <div className="neoplasmcontainer">
        {showTable && <NeoplasmTablemobile />}
      </div>

      <button className="btn3" onClick={handleDrugClick}>
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div className="drugcontainer">{showDrug && <DrugTablesmobile />}</div>
    </div>
  );
};
