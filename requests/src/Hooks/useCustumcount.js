import {useState} from 'react'

function useCustumcount(intialvalue=0,value) {
    const [count,setCount]= useState(intialvalue)
  const increment = () =>{
        setCount(prev => prev + value)
  }
  const Decrement = () =>{
    setCount(prev => prev - value)
  }
  const reset = () =>{
    setCount(intialvalue)
  }

  return [count,increment,Decrement,reset]
}

export default useCustumcount
