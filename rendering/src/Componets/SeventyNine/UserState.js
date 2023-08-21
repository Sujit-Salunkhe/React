import React,{useState} from 'react'

const UserState = () => {
const [count,setCount]=useState(0)
console.log("redering this item");
console.log("redering this item");
  return (
    <div>
      <button onClick={ ()=> setCount(count + 1)}>Count -{count}</button>
    </div>
  )
}

export default UserState
