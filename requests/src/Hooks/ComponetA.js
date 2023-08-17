import React,{useContext} from 'react'
import {  CountContext } from '../App'

function ComponetA() {
    const countcontext = useContext( CountContext )
  return (
    <div>
      ComponetA 
      {countcontext.countstate}
      <button onClick={() =>countcontext.dispatchcount("Increment")}>Increment</button>
      <button onClick={() =>countcontext.dispatchcount("Decrement")}>Decrement</button>
      <button onClick={() =>countcontext.dispatchcount("reset")}>Reset</button>
    </div>
  )
}

export default ComponetA
