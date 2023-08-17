import React, { useReducer } from "react";
const intialstate = {
  Firstcounter: 0,
  SecondCounter: 10,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state,Firstcounter: state.Firstcounter + action.value };
    case "Decrement":
      return { ...state,Firstcounter: state.Firstcounter - action.value };
    case "Increment2":
      return { ...state,SecondCounter: state.SecondCounter + action.value };
    case "Decrement2":
      return { ...state,SecondCounter: state.SecondCounter - action.value };
    case "reset":
      return intialstate;
    default:
      return state;
  }
};
function Sixtythree() {
  const [count, dipatch] = useReducer(Reducer, intialstate);
  return (
    <div>
      <h1>{count.Firstcounter}</h1>
      <h1>{count.SecondCounter}</h1>
      <button onClick={() => dipatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dipatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dipatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dipatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dipatch({ type: "Increment2", value: 1 })}>
          Increment2
        </button>
        <button onClick={() => dipatch({ type: "Decrement2", value: 1 })}>
          Decrement2
        </button>
    </div>
      <button onClick={() => dipatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Sixtythree;
