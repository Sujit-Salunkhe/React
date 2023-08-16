import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FiftyFive() {
    const [post,setPost] =useState({})
    const [id,setId]=useState(1)
    const [idformbutton,setIdFromButton] =useState(1)
    useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idformbutton}`)
    .then(Response =>{
        console.log(Response)
        setPost(Response.data)
    })
    .catch(err =>{
        console.log(err)
    })},[idformbutton])
    let changedata = () =>{
        setIdFromButton(id)
    }
  return (
    <div>
     
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={changedata}>Fetch data</button>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>

      
    </div>
  )
}

export default FiftyFive
