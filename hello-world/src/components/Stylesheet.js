import React from 'react'
import './Mystyle.css'

function Stylesheet(props) {
    let className =props.primary ? "primary" :""
  return (
    <div>
      <h2 className={`${className} font-size `}>I am a king of a world</h2>
        </div>
  )
}

export default Stylesheet
