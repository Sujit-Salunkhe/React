import { useState, useEffect } from "react";

const Numbers = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};

export default Numbers;
