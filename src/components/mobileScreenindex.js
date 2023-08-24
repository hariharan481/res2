import React from "react";
import { useState } from "react";
import "../styles/IndexSearch.css";

import { useEffect } from "react";
import IndexTablesmobile from "./IndexMobile";
import NeoplasmTablemobile from "./Neoplasmmobile";
import DrugTablemobile from "./DrugTablemobile";

export const MobileScreen = () => {
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

  return (
    <div
      style={{
        height: "90vh",
        width: "90vw",
        display: "flex",

        border: "0.5px solid grey",
      }}
    >
      <button
        onClick={handleIndexClick}
        style={{
          height: "30px",
          width: "100px",

          position: "absolute",
        }}
      >
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">
        {showIndx && <IndexTablesmobile />}
      </div>
      <button
        style={{
          height: "30px",
          width: "100px",

          position: "absolute",
          marginLeft: "100px",
        }}
        onClick={handleTableClick}
      >
        {showTable ? "" : ""}
        Neoplasam
      </button>

      <div style={{}}>{showTable && <NeoplasmTablemobile />}</div>

      <button
        style={{
          height: "30px",
          width: "100px",

          position: "absolute",
          marginLeft: "200px",
        }}
        onClick={handleDrugClick}
      >
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div>{showDrug && <DrugTablemobile />}</div>
    </div>
  );
};
