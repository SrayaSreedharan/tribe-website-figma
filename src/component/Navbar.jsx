import React from 'react'
import '../component/Navbar.css'

const Navbar = () => {
  return (
     <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   <div className="top-bar">
    <div className="contact-info">
      <span><i className="fa fa-phone" style={{color:'white'}}> +91 3336667778</i></span>
      <span><i className="fa fa-envelope" style={{color:'white',paddingTop:'24px',paddingBottom:'24px',paddingLeft:'24px',gap:"12px",fontSize:'18px'}}>  suelotribe@gmail.com</i></span>
    </div>
  </div>
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
        <div className="dropdown-content">
          <a href="#">Hiking</a>
          <a href="#">Kayaking</a>
          <a href="#">Workshops</a>
        </div>
      </div>
    </nav>
    <button className="book-now">Book Now</button>
  </header>  
    </div>
  )
}
export default Navbar
