import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let Navigate=useNavigate()
  return (
    <div>
      Home Page
      <button onClick={()=>Navigate('/ordersummary')}>Place Order</button>
    </div>
  )
}
