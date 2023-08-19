import React, { useState,useMemo } from "react";

function Seventy() {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);
  const handlecounterone = () => {
    setCounterone(counterone + 1);
  };
  const handlecountertwo = () => {
    setCountertwo(countertwo + 1);
  }
const iseven = useMemo(() =>{
    let i = 0
    while (i < 200000000) i++
    return counterone%2  === 0 
})
  return (
    <div>
      <div>
        <button onClick={handlecounterone}>count1 - {counterone}</button>
        {iseven ? "even" : "odd"}
      </div>
      <div>
        <button onClick={handlecountertwo}>count2 - {countertwo}</button>
      </div>
    </div>
  );
}

export default Seventy;
