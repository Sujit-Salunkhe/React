import React,{useReducer,useEffect} from 'react'
import axios  from 'axios'
const intialstate ={
    post:{},
    error:"",
    loading:true
}
const reduser = (state,action) =>{
    switch(action.type){
        case "Fetching success":
            return { 
                post:action.payload,
                error:'',
                loading:false
            }
        case "Fetch unsuccessful":
            return {
                error:"something went wrong",
                loading:false,
                post:{}
            }
        default:
            return state
    }
}

function SixtySeven() {
    const[state,dispatch] =useReducer(reduser,intialstate)
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type:"Fetching success" , payload:response.data})
        })
        .catch(error => {
            dispatch({type:"Fetch unsuccessful"})
        })
    },[])
    
  return (
    <div>
      {state.loading ? "loading" :state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default SixtySeven
