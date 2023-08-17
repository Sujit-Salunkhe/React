import './App.css';
import React,{useReducer} from 'react'
import ComponetA from './Hooks/ComponetA';
import CompnetB from './Hooks/CompnetB';
import ComponetC from './Hooks/ComponetC';
export const CountContext=React.createContext()
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

function App() {
  const [count,dispatch] = useReducer(Reducer,intialstate)

  return (
    <CountContext.Provider value={{countstate:count,dispatchcount:dispatch}}>
    <div className="App">
        count -{count}
        <ComponetA/>
        <CompnetB/>
        <ComponetC/>
    </div>
      </CountContext.Provider>
  );
}

export default App;
