import React from 'react'
import { BiCheck } from 'react-icons/bi'
import "./service.css"

function Service() {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <div className="container service_container">
      <article className='service'>
        <div className="service_header">
        <h3>  Web Development</h3>
        </div>
        <ul className='service_list'>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>
          <li><BiCheck className='list_icon'/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> </li>

        </ul>
      </article>
      </div>
    </section >
  )
}

export default Service