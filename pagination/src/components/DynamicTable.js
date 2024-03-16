import React, { useState } from "react";
import './dy.css'
const DynamicTable = () => {
  const [Row, setRow] = useState();
  const [col, setCol] = useState();

  return (
    <>
      <div className="input_Container">
        <input type="text" onChange={(e) => setRow(e.target.value)} placeholder="Row" />
        <input type="text" onChange={(e) => setCol(e.target.value)} placeholder="Col" className="input_con"/>
      </div>
      <div className="radio_container">
        Order :   <input type="radio" id="radio" className="radio_input" name="order"/>Ascending
        <input type ="radio" id='radio' className="radio_input" name="order"/>Descending
      </div>
    </>
  );
};

export default DynamicTable;
