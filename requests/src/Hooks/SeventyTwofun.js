import React, { useState, useEffect, useRef } from "react";

function SeventyTwofun() {
  const [timer, setTimer] = useState(0);
  const intervalref = useRef();
  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalref.current);
    };
  }, []);

  return (
    <div>
      timerf ={timer}
      <button onClick={() => clearInterval(intervalref.current)}>stop</button>
    </div>
  );
}

export default SeventyTwofun;
