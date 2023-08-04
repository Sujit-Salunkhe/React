import React from "react";
import PersonList from "./PersonList";

function List() {
const name =["sujit","Mahesh","Lalit"]
const persons = [
    {
      id: 1,
      name: "John",
      skill: "JavaScript",
      age: 25,
    },
    {
      id: 2,
      name: "Alice",
      skill: "Python",
      age: 30,
    },
    {
      id: 3,
      name: "Michael",
      skill: "Java",
      age: 28,
    },
    // Add more persons as needed
  ];
// const personsName = persons.map((persons) => <PersonList person={persons} key={persons.id} />);
const names=name.map((name,index) => <h2 key={index}>{name}</h2>)
  return <div>{names}</div>;
}

export default List;
