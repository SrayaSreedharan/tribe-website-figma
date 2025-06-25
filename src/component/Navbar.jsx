import React, { useState } from 'react'
import '../component/Navbar.css'
import logos from '../images/Layer2.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
     <div>
   <div className="top-bar">
    <div className="contact-info">
      <span><i className="fa fa-phone" style={{color:'white'}}> +91 3336667778</i></span>
      <span><i className="fa fa-envelope" style={{color:'white'}}>  suelotribe@gmail.com</i></span>
    </div>
  </div>
  <div className='containers'>
  <header className="navbars">
    <div className="logo">
      <img src={logos}></img>
    </div>
    <div className="hamburger" onClick={toggleMenu}>
      &#9776;
    </div>
    <nav className={`nav-link ${menuOpen ? 'active' : ''}`}>
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
