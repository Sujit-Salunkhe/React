import React,{useReducer} from 'react'
const intialstate = 0
const Reducer = (state,action) => {
    switch(action){
        case("Increment"):
            return state + 1
        case("Decrement"):
            return state - 1
        case("reset"):
            return intialstate
        default:
            return state
    }
} 
function Sixtytwo() {
const [count,dipatch] =  useReducer(Reducer,intialstate)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() =>dipatch("Increment")}>Increment</button>
      <button onClick={() => dipatch("Decrement")}>Decrement</button>
      <button onClick={() => dipatch("reset")}>Reset</button>
    </div>
  )
}

export default Sixtytwo
