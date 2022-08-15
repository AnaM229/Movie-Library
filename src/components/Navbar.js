import React from 'react'
import Logo from '../assets/navbaricon.jpg'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div id='navbar'>
           <div id='left-col'><Link to='/'><img src={Logo} id='logo' /></Link></div>
           <div id='right-col'> Movie library</div>
    
    </div>
  )
}
