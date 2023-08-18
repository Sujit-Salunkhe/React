import React,{ useState ,useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Parentcomponet() { 
const [age,setAge] = useState(25)
const [salary,setSalary] = useState(50000)
const increaseage = useCallback(() =>{
    setAge(age + 1)
},[age])
const increasesalary = useCallback(() =>{
    setSalary(salary + 5000)
},[salary])
return (
    <div>
        <Title/>
        <Count text="age" count={age}/>
        <Button clickhandler={increaseage}>Age increment</Button>
        <Count text="salary" count={salary}/>
        <Button clickhandler={increasesalary}>salaryincrement</Button>
    </div>
  )
}

export default Parentcomponet