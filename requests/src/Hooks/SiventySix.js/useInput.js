import {useState} from 'react'

function useInput(intialvalue) {
const [value,setvalue] = useState(intialvalue)
const reset =() =>{
    setvalue(intialvalue)
}
const bind = {
    value,
    onChange :e => {setvalue(e.target.value)}
}
return [value,bind,reset]
}
export default useInput
