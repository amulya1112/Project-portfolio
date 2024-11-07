import React ,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./services.scss"
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"

const Services = () => {
  return <section className="section-blog blog-home-section section__padding">
    <div className="service-header">
        <p className="service-header">Services</p>
            <h2>Our Services</h2>
            <p className='service__description'>
                There are several services provided
            </p>
            <Reveal>
             <div className='fake-big'>About</div>
           </Reveal>
             <div className='section-about-wrapper section__padding'>
                 <article className='section-about-description'>
                 <div>
        <h2 aria-label="About">
        <Blast 
                 letterClass={letterClass} 
                 arrayStr={["A","b","o","u","t"]} 
                 indexLetter={7}
                 />
             </h2>
              <Fade left>
                <p>
                As a Digital Marketing professional and business consultant and strategist , 
                I am passionate about not to following the trend but to create a difference 
                in that trend.
                </p>
              </Fade>
              <Fade left>
                <p>
                Addicted to creativity and remixing ideas for a different output is a strong
                belief of my heart and mind.Just to hit my goals by using technology on appropriate time .
                </p>
              </Fade>
              <Fade right>
                <p>
                Digital marketing lets organizations use a variety of tools and metrics to understand 
                the behavior and preferences of customers, prospects and leads. 
                </p>
              </Fade>
              <Fade left>
              <Link to={"/about"} className='contact-button'>
             <div>
                <span className='bg switch-bg'></span>
                <span className='bg switch__border-color'></span>
                <span className='text'>Know More</span>
             </div>
            </Link>
              </Fade>
        
    </div>
    </article>

  </div>
  </div>
  
  </section>
}

export default Services
