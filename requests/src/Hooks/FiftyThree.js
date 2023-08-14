import React,{useState} from 'react'
import Fiftytwo from './Fiftytwo'

function FiftyThree() {
    const [value,setValue] =useState(true)
  return (
    <div>
      <button onClick={()=>setValue(!value)}>toggele display</button>
        {value && <Fiftytwo/>}
    </div>
  )
}
export default FiftyThree
