import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponetF() {
const countcontext = useContext(CountContext)
  return (
    <div>
      <div>
      ComponetF
      {countcontext.countstate}
      <button onClick={() =>countcontext.dispatchcount("Increment")}>Increment</button>
      <button onClick={() =>countcontext.dispatchcount("Decrement")}>Decrement</button>
      <button onClick={() =>countcontext.dispatchcount("reset")}>Reset</button>
    </div>
    </div>
  )
}

export default ComponetF
