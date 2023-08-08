import React from 'react'
import  ReactDOM  from 'react-dom'
function PortalsDemo() {
  return ReactDOM.createPortal(
      <h1>
        Portal Demo
      </h1>,
      document.getElementById("Portal-Root")
      )
    }

export default PortalsDemo
