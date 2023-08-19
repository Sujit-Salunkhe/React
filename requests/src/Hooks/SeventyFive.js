import React from 'react'
import useCustumcount from './useCustumcount'

function SeventyFive() {
    const [count,Increment,Decrement,reset] =useCustumcount(0,1)
  return (
    <div>
    <h1>{count}</h1>
     <button onClick={Increment}>increment</button> 
     <button onClick={Decrement}>Decrement</button> 
     <button onClick={reset}>reset</button> 
    </div>
  )
}

export default SeventyFive
