import React from 'react'
const Color = ({colorcode, changecolor}) => {
    const [a,b,c] = colorcode
    const background=`rgb(${a},${b},${c})`;
    const h=document.body
    h.style.background=background
return (
    <div>
        It's magic
        Which color do you like a most
        <div>
        Color Code :-{background}
        </div>

    </div>
  )
}

export default Color
