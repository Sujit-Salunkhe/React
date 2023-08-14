import React ,{useEffect ,useState} from 'react'

function Fiftytwo() {
 const [x,setX] =useState(0)
 const [y,setY] =useState(0)
 const mousehandler = e =>{
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
 }
 useEffect(()=>{
    console.log("Use Effect called")
    window.addEventListener("mousemove",mousehandler)
    return () =>{
      console.log("Remove event listner")
      window.removeEventListener("mousemove",mousehandler)
    }
 },[])
 
return (
    <div>
        <h1> x-{x},y-{y}</h1>  
    </div>
  )
}

export default Fiftytwo
