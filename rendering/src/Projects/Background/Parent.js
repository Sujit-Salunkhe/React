import React, { useState } from "react";
import Color from "./Color";

const Parent = () => {
  const [color, setColor] = useState([]);
  const colorcodes = () => {
    let colorcode = [];
    for (let i = 0; i < 3; i++) {
      let number = Math.floor(Math.random() * 256);
      colorcode.push(number);
    }
    setColor(colorcode);
  };
  return (
    <div>
      <Color colorcode={color} changecolor={colorcodes} />
    </div>
  );
};

export default Parent;
