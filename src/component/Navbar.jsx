import React from 'react'
import '../component/Navbar.css'

const Navbar = () => {
  return (
     <div>
   <div className="top-bar">
    <div className="contact-info">
      <span><i className="fa fa-phone" style={{color:'white'}}> +91 3336667778</i></span>
      <span><i className="fa fa-envelope" style={{color:'white',paddingTop:'24px',paddingBottom:'24px',paddingLeft:'24px',gap:"12px",fontSize:'18px'}}>  suelotribe@gmail.com</i></span>
    </div>
  </div>
  <div className='containers'>
  <header className="navbar">
    <div className="logo">
      SUELO <span className="spiral">🌀</span> TRIBE
    </div>
    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Explore</a>
      <a href="#">Stays</a>
      <a href="#">Trips</a>
      <div className="dropdown">
        <button className="dropbtn">Activities ▾</button>
      </div>
    </nav>
    <button className="book-now">Book Now</button>
  </header>  
    </div>
    </div>
  )
}
export default Navbar
