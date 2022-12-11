import React from 'react'
import IMG from "../../assets/bg13.jpg"
import "./portfolio.css"

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is portfolio title</h3>
          <div className="portfolio_item_cta">
          <a href="github" className='btn'> Github</a>
          <a href="github" className='btn btn-primary'> Live Demo</a>
          </div>
        </article>
      
       
      </div>
    </section>
  )
}

export default portfolio