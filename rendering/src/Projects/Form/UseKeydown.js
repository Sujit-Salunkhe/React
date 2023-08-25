import React from 'react'

const UseKeydown = (event,inputref,twoinputref) => {
 if(event.keyCode === 13){
    event.preventDefault()
    twoinputref.current.focus()
 }
  
}

export default UseKeydown
