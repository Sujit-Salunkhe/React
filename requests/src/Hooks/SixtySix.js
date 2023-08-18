import React,{useState,useEffect} from 'react'
import axios from 'axios'
function SixtySix() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    const [post,setPosts]=useState({})
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setError("")
            setPosts(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError("something went wrong")
            setPosts({})
        })
    },[])
    
  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error :null}
    </div>
  )
}

export default SixtySix
