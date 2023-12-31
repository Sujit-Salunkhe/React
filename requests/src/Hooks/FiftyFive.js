import React,{useState,useEffect} from 'react'
import axios from 'axios'
function FiftyFive() {
    const [post,setPost] =useState({})
    const [id,setId]=useState(1)
    useEffect(() =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(Response =>{
        console.log(Response)
        setPost(Response.data)
    })
    .catch(err =>{
        console.log(err)
    })},[id])
  return (
    <div>
     
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>

      
    </div>
  )
}

export default FiftyFive
