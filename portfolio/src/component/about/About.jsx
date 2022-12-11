import React from 'react'
import ME from "../../assets/me.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import "./about.css"


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>3+ Experience</h5>
              <small> Years Working</small>
            </article>
            
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>20+ World Wide</small>
            </article>
          
       
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
        
       
          
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque accusamus a, maxime minus officia molestiae doloribus aliquam ducimus ab repellat ullam libero illum provident mollitia quia iste laborum, qui corrupti?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
      
    </section>

  )
}

export default About
