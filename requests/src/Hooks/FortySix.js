import React, {useState} from 'react'

function FortySix() {
    const intialocount =0 
    const [count,setCount] =useState(intialocount)
    const increment5 = () =>{
        for(let i=1;i<=5;i++){
            setCount(Prevcount=>Prevcount + 1)
        }
    }
  return (
    <div>
        count :{count}
      <button onClick= {() => setCount(intialocount)}>Reset</button>
      <button onClick= {() => setCount(Prevcount=>Prevcount  + 1)}>Increment</button>
      <button onClick= {() => setCount(Prevcount=>Prevcount  - 1)}>Decrement</button>
      <button onClick= {increment5}>Increment 5</button>
    </div>
  )
}

export default FortySix
