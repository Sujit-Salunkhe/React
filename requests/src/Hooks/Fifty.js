import React,{ useState,useEffect } from 'react'

function Fifty() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    useEffect (()=>{
        console.log("useeffect updating document title")
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Click{count}</button>
    </div>
  )
}

export default Fifty
