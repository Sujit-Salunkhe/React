import React from 'react'
const Color = ({colorcode, changecolor}) => {
    const [a,b,c] = colorcode
    const background=`rgb(${a},${b},${c})`;
    const h=document.body
    h.style.background=background
return (
    <div>
        <button onClick={changecolor}>Click For Color Change</button>
    </div>
  )
}

export default Color
