import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ordersummary() {
    let Navigate=useNavigate()
  return (
    <div>
    <h5> OrderConfirmed!...</h5>  
      <button onClick={()=>Navigate(-1)}>Go Back</button>
    </div>
   
  )
}
