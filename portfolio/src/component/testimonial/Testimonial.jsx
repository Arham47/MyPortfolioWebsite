import React from 'react'
import ME from "../../assets/me.jpeg"
import "./testmonial.css"
import {   Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function Testimonial() {

  return (
    <section id="testimonial">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
     
      >

        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={ME} alt="" />
          </div>
          <h5 className='client_name'>client name</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vel blanditiis! Aliquid maxime iusto modi dolorem, commodi est at sequi laudantium quaerat eos animi provident facere reiciendis incidunt iste architecto!</small>

        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={ME} alt="" />
          </div>
          <h5 className='client_name'>client name</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vel blanditiis! Aliquid maxime iusto modi dolorem, commodi est at sequi laudantium quaerat eos animi provident facere reiciendis incidunt iste architecto!</small>

        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={ME} alt="" />
          </div>
          <h5 className='client_name'>client name</h5>
            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vel blanditiis! Aliquid maxime iusto modi dolorem, commodi est at sequi laudantium quaerat eos animi provident facere reiciendis incidunt iste architecto!</small>

        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src={ME} alt="" />
          </div>
          <h5 className='client_name'>client name</h5>

            <small className='client_review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vel blanditiis! Aliquid maxime iusto modi dolorem, commodi est at </small>

        </SwiperSlide>
   
      </Swiper>
   
      
    </section>
  )
}

export default Testimonial
