import React  from 'react'
import{useSelector} from 'react-redux'
import './App.css'

export default function Model() {
    const product=useSelector((state)=>state.shopreducer.products)
    return (
        <div>
      {product.map((item)=>item)}
        </div>
    )
}
