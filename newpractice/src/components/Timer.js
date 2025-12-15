import { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 500);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={changeCount}>Increase</button>
    </div>
  );
};

export default Timer;
