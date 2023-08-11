import React ,{ useState } from 'react'

function Fortyfive() {
    const [count,incrementCount] = useState(200)
  return (
    <div>
      <button onClick={()=>incrementCount(count + 1)}>count {count}</button>
    </div>
  )
}

export default Fortyfive

