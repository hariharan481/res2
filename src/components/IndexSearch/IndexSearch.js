import React from 'react'
import { useState } from "react";
import"../styles/IndexSearch.css";
import { DrugTables } from './DrugTables';

import CircularWithValueLabel from './Spinner';
import { useEffect } from 'react';
import IndexTables1 from './IndexTable2';
import NeoplasmTable from './NeoplasamTable';
import DrugTable from './DrugTable';







export const IndexSearch = () => {

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
  const [activeBtn, setActiveBtn] = useState(null);
  const handleNavBtnClick = (btnId) => {
    setActiveBtn(btnId);
    setShowIndex(!showIndx);
    setShowTable(false);
    setShowdrug(false);
  };
  const handleNavBtnClick2 = (btnId) => {
    setActiveBtn(btnId);
    setShowTable(!showTable);
    setShowIndex(false);
    setShowdrug(false);
  };
  const handleNavBtnClick3 = (btnId) => {
    setActiveBtn(btnId);
    setShowdrug(!showDrug);
    setShowIndex(false);
    setShowTable(false);
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

  if (loading) return 

  <CircularWithValueLabel />

 

  return (
    

<div className="indexcontainer">
      <button style={{
        width:"100px",
        height:"30px",
        
      }} className={`nav-btn ${activeBtn === "btn1" ? "active" : ""}`}
              onClick={() => handleNavBtnClick("btn1")} 

        >
        {showIndx ? "" : ""}
        Index
      </button>
      <div className="IndexTablecontainer">

      {showIndx && <IndexTables1/>}
      </div>
      <button style={{
        height:"30px",
        width:"100px",
        marginLeft:"5px"
      }}  className={`nav-btn ${activeBtn === "btn2" ? "active" : ""}`}
              onClick={() => handleNavBtnClick2("btn2")} 
      
      >
        {showTable ? "" : ""}
        Neoplasam
      </button>

      <div style={{
        position:"absolute"
      }} className="neoplasmcontainer">

      { showTable && <NeoplasmTable/>}
</div>

    
      <button style={{
        height:"30px",
        width:"100px",
        marginLeft:"5px"
      }} className={`nav-btn ${activeBtn === "btn3" ? "active" : ""}`}
              onClick={() => handleNavBtnClick3("btn3")} 
      
    
      >
        {showDrug ? "" : ""}
        Drugs
      </button>
      <div className="drugcontainer">


      {showDrug && <DrugTable/>}
      </div>
    </div>
  
  )
}
