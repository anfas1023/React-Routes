import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import style from './navbar.module.css'
export default function Product() {

  return (
   <>
       <input type='text' placeholder='Enter product'></input>
       <nav className={style.secondarynav}>
       <Link to='/product/feature'>Feature</Link>
       <Link to='/product/new'>New</Link>
       </nav>
   <Outlet/>
   </>
  )
}
