import React from 'react'
import Logo from '../assets/navbaricon.jpg'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <div id='navbar'>
           <div id='left-col'><img src={Logo} id='logo' /></div>
           <div id='right-col'> Movie library</div>
    
    </div>
  )
}
