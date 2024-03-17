import React, { useEffect, useState } from "react";
import "./dy.css";
const DynamicTable = () => {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [numbers, setNumbers] = useState(1);

  let number = 1
  const handelNumber = () => {
    //   console.log(num,'inside func')
        number +=1
  }
  return (
    <>
      <div className="input_Container">
        <input
          type="text"
          onChange={(e) => setRow(e.target.value)}
          placeholder="Row"
        />
        <input
          type="text"
          onChange={(e) =>setCol(e.target.value)}
          placeholder="Col"
          className="input_con"
        />
      </div>
      <div className="radio_container">
        Order :
        <input
          type="radio"
          id="radio1"
          className="radio_input"
          name="order"
          value="asc"
        />
        <label htmlFor="radio1">Ascending</label>
        <input
          type="radio"
          id="radio2"
          className="radio_input"
          name="order"
          value="dsc"
        />
        <label htmlFor="radio2">Descending</label>
      </div>
      <table>
      {row && col ? (
        <>
        <tbody>
            {[...Array(parseInt(row))].map(( _, i) => (
                <tr key={i}>
                 {[...Array(parseInt(row) * parseInt(col))].slice(0,col).map(( _, index) => (
                    <td key={index}>
                        {number}
                        {handelNumber()}
                    </td>
                ))}
              </tr>
            ))}
          </tbody>
          
          
          </>
      ) : null}
      </table>
    </>
  );
};

export default DynamicTable;
