import "./form.css";
import Model from "./Createportal";
import { useEffect, useState } from "react"; 
const Form = () => {
  const [loading,setLoading] = useState(false)
  const [lname,setLname] = useState('')
  const handleName = (e) => {
    console.log(e.target.value)
    setLname(e.target.value)
  }
  useEffect(() => {
      setLoading(true)
  },[loading])
  return <input type="text" value={lname} onChange={handleName} />
  
  
};

export default Form;
