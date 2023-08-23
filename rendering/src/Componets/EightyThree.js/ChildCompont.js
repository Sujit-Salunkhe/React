import React from 'react'

const ChildCompont = () => {
console.log("Child componet Rendering")
const date=new Date()
  return (
    <div>
      ChildCompont
      {date.getMonth()}
      {date.getHours()}
    </div>
  )
}

export default ChildCompont
