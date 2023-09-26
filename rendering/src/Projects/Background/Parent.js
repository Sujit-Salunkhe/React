import React, { useState,useEffect } from "react";
import Color from "./Color";

const Parent = () => {
  const [color, setColor] = useState([]);
  useEffect(()=>{
    const interval = setInterval (()=>{  let colorcode = [];
    for (let i = 0; i < 3; i++) {
      let number = Math.floor(Math.random() * 256);
      colorcode.push(number);
    }
    setColor(colorcode);
  },2000);
  return () => {
  clearInterval(interval)
}}
,[])
  
  return (
    <div>
      <Color colorcode={color}  />
    </div>
  );
};

export default Parent;
