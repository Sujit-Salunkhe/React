import React,{useState} from 'react'
// import ChildCompont from './ChildCompont'

const Parentcompont = ({children}) => {
const [count,setCount] =useState(0)
console.log("Parent componet Render")
  return (
    <div>
      <button onClick={() =>setCount(prev => prev + 1)}>{count}</button>
      {children}
    </div>
  )
}

export default Parentcompont
