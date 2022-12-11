import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="linkedin.com" target="_blank" className=''><BsLinkedin/></a>
        <a href="github.com" target="_blank" className=''><FaGithub/></a>
        <a href="facebook.com" target="_blank" className=''><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocials
