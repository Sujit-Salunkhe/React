import React from 'react'

function Childcomponet(props) {
  return (
    <div>
      <button onClick={() => props.greethandler("child")}>Greet parent</button>
    </div>
  )
}

export default Childcomponet
