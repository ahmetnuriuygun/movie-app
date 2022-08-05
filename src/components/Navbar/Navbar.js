import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  
  
  return (
    <div>
        <nav className='navbar'>
            <ul className='headerdiv'><li><NavLink to="/" className='header'>React Movie App</NavLink></li></ul>

            <ul className='butons'>
                <li><NavLink to="/login"><button className='login'>Log In</button></NavLink></li>
                <li><NavLink to="/register"><button className='register'>Register</button></NavLink></li>
            </ul>
        </nav>

        

    </div>
  )
}

export default Navbar