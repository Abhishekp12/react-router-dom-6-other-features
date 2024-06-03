import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <>
        <header className='container'>
            <ul className="nav-item-left">
              <li><NavLink to="/"  >Home</NavLink></li>
              <li> <NavLink to="/about"  >About</NavLink></li>        
            </ul>
            <div className="nav-item-leftmost"> 
              <NavLink to="/contact"  >contactus</NavLink>
            </div>
        </header>
    </>
  )
}

export default Header