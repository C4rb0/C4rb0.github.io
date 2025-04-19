import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="cyber-header">
      <nav className="cyber-nav">
        <div className="nav-left">
          <span className="cyber-glitch" data-text="CARBO">CARBO</span>
        </div>
        
        <div className="nav-right">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            HOME
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            ABOUT
          </NavLink>
          {/* <NavLink to="blog" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            BLOG
          </NavLink> */}
          <NavLink to="/writeup" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            CTF WRITEUP
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header