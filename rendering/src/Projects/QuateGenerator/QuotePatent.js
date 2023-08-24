import React,{useEffect,useState} from 'react'
import axios from 'axios'
import QuateChild from './QuateChild'
const randomnumber = (quatos) =>{
    return quatos[Math.floor(Math.random() * quatos.length)]
}
const QuotePatent = () => {
const [quatos,setQuatos]=useState([])
const [quato,setQuato]=useState(null)
useEffect(()=>{
axios.get("https://type.fit/api/quotes")
.then((res) =>{ setQuatos(res.data)
})
.catch(err =>{console.log(err)})
},[])
useEffect(() => {
    if (quatos.length > 0) {
      setQuato(randomnumber(quatos)); 
    }
  }, [quatos]);
const RenderAnother = () =>{
    setQuato(randomnumber(quatos))
}
return (
    <div>
      <QuateChild read={quato} another={RenderAnother}/>
    </div>
  )
}

export default QuotePatent
