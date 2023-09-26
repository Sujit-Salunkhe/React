import React ,{useState} from 'react'
const intialstate = {
    fname:"alok",
    lname:"pande"
}
const UseStateImmutablitu = () => {
const [person,setPerson] = useState(intialstate)
const changerperson = () =>{
    // person.fname = "sujit"
    // person.lname ="Salunkhe"
    // setPerson(person)
    const newPerson = {...person}
    newPerson.fname ="sujit"
    newPerson.lname ="salunkhe"
    setPerson(newPerson)
}
    console.log("Rendering")
  return (
    <div>
      <button onClick={changerperson}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default UseStateImmutablitu
