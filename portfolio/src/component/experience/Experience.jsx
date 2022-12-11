import React from 'react'
import { BsPatchCheck, BsPatchCheckFill } from 'react-icons/bs'
import "./experience.css"

function Experience() {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h1>My Experience</h1>
      <div className="container container_experience">
        <div className="container_fronend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>TailWind</h4>
              <small className='text-light'>Beginner</small>
  
              </div> 
             </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>
        <div className="container_backend">
        <h3>Backlend Development</h3>
        <div className="experience_content">
            <article className='experience_details'>
              <div><BsPatchCheckFill/></div>
             <div>
             <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div >
              <h4>PHP</h4>
              <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Professional</small>

</div>            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Intermediate</small>
   
   </div>         </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Beginner</small>

</div>            </article>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience