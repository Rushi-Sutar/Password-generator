import React from 'react'
import './navbar.css'

function Navbar() {
  return (
       <nav className="navbar">
      <div className="logo">Password Generator</div>
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
