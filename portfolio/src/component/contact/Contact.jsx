import React from 'react'
import  { useRef } from 'react';
import emailjs from "emailjs-com"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import "./contact.css"

function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8e8ho2d', 'template_l9vbfn7', form.current, 'v3ZQvTGKkmHSgM99n')

      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon"/>
            <h4>E-mail</h4>
            <h5>i.am.arhamkhan25@gmail.com</h5>
            <a href='mailto:i.am.arhamkhan25@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon"/>
            <h4>Messanger</h4>
            <h5>Muhammad Arham Khan</h5>
            <a href='https://m.me/fraudibanda' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon"/>
            <h4>WhatsApp</h4>
            <h5>+92 335 990 8281</h5>
            <a href=' https://wa.me/+923359908281' target="_blank">Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"placeholder='Your Full Name' required/>
          <input type="email" name="email"placeholder='i.am.arhamkhan25@gmail.com' required/>
          <textarea name="message" id="" rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact