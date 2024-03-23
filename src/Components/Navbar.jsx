import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './navbar.module.css'

export default function Navbar() {

    const NavlinkStyle=({isActive})=>{
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }

        
    }
  return (
 <nav className={style.nav}>
   <NavLink style={NavlinkStyle} to='/'> Home</NavLink>
   <NavLink style={NavlinkStyle} to='/about'> About</NavLink>
   <NavLink style={NavlinkStyle} to='/product'> Product</NavLink>
 </nav>
  )
}
