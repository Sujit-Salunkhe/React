import { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.value };
    case "DECREMENT":
      return { count: state.count - action.value };
    case "INCREMENTBYFIVE":
      return { count: state.count + action.value };
    case "DECREMENTBYFIVE":
      return { count: state.count - action.value };
    default:
      return state;
  }
};

const Practice = () => {
  const [value, dispatch] = useReducer(reducer, initialState);
  const [sujit, setsujit] = useState('');
  useEffect(() => {
    
    const changeaname = document.getElementById("changeaname");
    changeaname.addEventListener("click", () => {
      setsujit("sujit");
      
    });
    return () => { changeaname.removeEventListener('click',() => {
        setsujit('sujit')
    })};
  });
  return (
    <div>
      {value.count}

      <input type="textbox" id="textbox" value={sujit} onChange={(event) => setsujit(event.target.value)} />
      <button id="changeaname">change a name please</button>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: "INCREMENTBYFIVE", value: 5 })}>
        Increment by five
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTBYFIVE", value: 5 })}>
        DECREMENT by five
      </button>
    </div>
  );
};

export default Practice;
