import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <>
    <header className='container'>
        <div className='navbar'>
            <div className="nav-item-left"> 
              <NavLink to="/"  >Home</NavLink>
              <NavLink to="/about"  >About</NavLink>
            </div>
            <div className="nav-item-leftmost"> 
              <NavLink to="/contact"  >contact</NavLink>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header