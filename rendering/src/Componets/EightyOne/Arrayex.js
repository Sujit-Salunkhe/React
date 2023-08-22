import React,{useState} from 'react'
const  initstate = ["Horse","Donkey","Pig"]


const Arrayex = () => {
const [person,setPerson] = useState(initstate)
const Changelist =() =>{
    const newlist =[...person]
    newlist.push("snake")
    newlist.push("Elephant")
    setPerson(newlist)
}
  return (
    <div>
    <button onClick={Changelist}>Click</button>
      {
      person.map((person,index) =>(
            <div key={index}>{person}</div>
        ))
      }
    </div>
  )
}

export default Arrayex
