import React, { useEffect, useState } from "react";
import "./dy.css";
const DynamicTable = () => {
  const [row, setRow] = useState();
  const [col, setCol] = useState();
  const [order, setOrder] = useState("Ase");
  let number = 0;


  const handleNumber = () => {
    number += 1
  };
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
          onChange={(e) => setCol(e.target.value)}
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
          value="Ase"
          checked={order === "Ase"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label htmlFor="radio1">Ascending</label>
        <input
          type="radio"
          id="radio2"
          className="radio_input"
          name="order"
          value="Des"
          checked={order === "Des"}
          onChange={(e) => setOrder(e.target.value)}
        />
        <label htmlFor="radio2">Descending</label>
      </div>
      <table>
        {row && col ? (
          <>
            <tbody>
              {[...Array(parseInt(row))].map((_, i) => (
                <tr key={i}>
                  {order === "Ase"
                    ? [...Array(parseInt(row) * parseInt(col))]
                        .slice(0, col)
                        .map((_, index) => (
                          <td key={index}>{(number = number + 1)}</td>
                        ))
                    : [...Array(parseInt(row) * parseInt(col))]
                        .slice(0, col)
                        .map((_, index) => <td key={index}>{row * col - number}{handleNumber()}</td>)}
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
