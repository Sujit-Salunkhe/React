import React from 'react'

const UseKeydown = (event,twoinputref) => {
 if(event.keyCode === 13){
    event.preventDefault()
    twoinputref.current.focus()
 } 
  
}

export default UseKeydown
