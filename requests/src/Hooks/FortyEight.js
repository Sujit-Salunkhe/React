import React,{ useState } from 'react'

function FortyEight() {
    const [item,setItems] =useState([])
    const addItem = () =>{
        setItems([...item,{
            id:item.length,
            value:Math.floor(Math.random() * 10) +1
        }])
    }   
  return (
    <div>
        <button onClick={addItem}>add a number</button>
        <ul>
      {item.map(item => (
        <li key={item.id}>{item.value}</li>))
      }
      </ul>
    </div>
  )
}

export default FortyEight
