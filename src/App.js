import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Search2 from "./components/Search2";
import Search1 from "./components/Search1";

function App() {
  return (
    <>
      <div className="page">
        <Header />
      </div>
    </>
  );
}

export default App;
