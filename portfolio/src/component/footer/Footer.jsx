import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import "./footer.css"

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'> Muhammad Arham</a>
      <ul className='permalink'>
        <li><a href="#">HOME</a></li> 
        <li><a href="#about">ABOUT</a></li> 
        <li><a href="#experience">EXPERIENCE</a></li> 
        <li><a href="#portfolio">PORTFOLIO</a></li> 
        <li><a href="#testimonial">TESTIMONIAL</a></li> 
        <li><a href="#contact">CONTACT</a></li> 
      </ul>
      <div className="footer_socials">
      <a href="https://facebook.com/fraudibanda" target="_blank"><FaFacebookF/></a>
      <a href="https://instagram.com/i.am.arhamkhan" target="_blank"><FiInstagram/></a>

      </div>
    <div className="footer_copyright">
      <small>&copy; Muhammad Arham Khan Portfolio .... All rights are reserved</small>
    </div>
    </footer>
  )
}

export default Footer