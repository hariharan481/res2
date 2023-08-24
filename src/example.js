import { Button, colors } from "@mui/material";
import React, { useState } from "react";

const items = [];

export const Example = () => {
  const [click, setClick] = useState(null);
  const name = true;
  const num = 5;
  items.name = "apple";

  const Click = (e) => {
    setClick(e.target.value);
  };

  const names = "hariharan";
  const lenght = names.length;
  console.log(lenght);
  const typ1 = "hello";
  const typ2 = "world";
  const typ3 = typ1.concat(typ2);
  console.log(typ3);
  console.log(typ1 + typ2);
  console.log(names.trim());
  var i;
  for (i = 0; i < 10; i++) {
    console.log(i);
  }

  const arr = ["apple", "mango"];
  const [frut, setFrut] = useState(false);
  const [clik, setClik] = useState();
  const fruits = ["bannana", "Orange", "Apple"];
  const shop = () => {
    setFrut(true);
  };
  const handleClick = () => {
    setClick();
  };
  fruits.push("hari");
  console.log(fruits);
  fruits.pop();
  fruits.slice(1);
  console.log(fruits.slice(1));
  const date = new Date();
  date.getDate();
  console.log(date);
  console.log(date.getFullYear());
  const [Age, setAge] = useState(18);
  const [Votable, setVotable] = useState("");
  const handlechange = (e) => {
    const inputAge = Number(e.target.value);
    setAge(e.target.value);
    if (isNaN(inputAge)) {
      setVotable("inpute age not a number");
    } else {
      setVotable(inputAge > 18 ? "votable" : "notVotable");
    }
  };

  return (
    <div>
      {name && <p>welcome clarit</p>}

      {items.name}
      <input onChange={handlechange} type="number" value={Age}></input>

      <button>try it</button>
      <p>{Votable}</p>
    </div>
  );
};
