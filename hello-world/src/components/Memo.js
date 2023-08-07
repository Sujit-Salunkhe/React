import React from 'react'

function Memo({name}) {
    console.log("Rendering memo component")
  return (
    <div>
      
    </div>
  )
}

export default  React.memo( Memo )
