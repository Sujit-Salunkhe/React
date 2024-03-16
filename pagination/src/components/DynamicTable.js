import React, { useState } from "react";
import './dy.css'
const DynamicTable = () => {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [arr,setArr] = useState([1,2,3,4,5,6])
  const [order,setOrder] = useState()

  return (
    <>
      <div className="input_Container">
        <input type="text" onChange={(e) => setRow(e.target.value)} placeholder="Row" />
        <input type="text" onChange={(e) => setCol(e.target.value)} placeholder="Col" className="input_con"/>
      </div>
      <div className="radio_container">
        Order :   <input type="radio" id="radio1" className="radio_input" name="order" value={() => setOrder('asc')}/><label for="radio1">Ascending</label>
        <input type ="radio" id='radio2' className="radio_input" name="order" value={() => setOrder('des')}/><label for='radio2'>Descending</label>
      </div>  
     <table>
        
     </table>
    </>
  );
};

export default DynamicTable;
