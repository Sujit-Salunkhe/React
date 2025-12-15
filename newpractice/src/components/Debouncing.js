import { useCallback, useState, useRef, useMemo } from "react";

const Debouncing = () => {
  const [throttle, setThrottle] = useState("");
  const [debounce, setDebounce] = useState("");
  const debouncing = useCallback((fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }, []);
  let timer = useRef();
  const Throttling = useCallback(
    (fn, delay) => {
      return (...args) => {
        if (!timer.current) {
          fn(...args);
          timer.current = setTimeout(() => {
            timer.current = null;
          }, delay);
          
        }
        
      };
    },
    []
  );

  const handleChange = (e, bol) => {
    if (bol) {
      setThrottle(e.target.value);
    } else {
      setDebounce(e.target.value);
    }
  };

  const throtle = Throttling(handleChange, 1000);
  const Debounsed = debouncing(handleChange, 10000);

  return (
    <>
      <input type="text" onChange={(e) => Debounsed(e, false)} ></input>
      <input type="text" onChange={(e) => throtle(e, true)} />
      <div>throtle:{throttle}</div>
      <div>Debounce:{debounce}</div>
    </>
  );
};

export default Debouncing;
