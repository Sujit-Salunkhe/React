import React from 'react'
const Color = ({colorcode, changecolor}) => {
    const [a,b,c] = colorcode
    const background=`rgb(${a},${b},${c})`;
    const h=document.body
    h.style.background=background
return (
    <div>
        It's magic
        Fill a form with great experience
        {/* <div>
        Color Code :-{background}
        </div> */}

    </div>
  )
}

export default Color
