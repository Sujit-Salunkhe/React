import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Pagination = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res))
        .catch(err => console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Pagination
