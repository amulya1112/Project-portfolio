import React ,{useState, useEffect} from 'react'
import Reveal from "react-reveal/Reveal"
import Fade from "react-reveal/Fade"
import Blast from "../BlastAnimation/Blast"
import "./skills.scss"

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
  
      }, 4000)
    })
  return <>
  <Reveal>
    <div className='fake-big'>Services</div>
  </Reveal>
  <div className='section-about-wrapper section__padding'>
    <article className='section-about-description'>
      <div>
        <h2 aria-label="Skills">
        <Blast 
                 letterClass={letterClass} 
                 arrayStr={["S","e","r","v","i","c","e","s"]} 
                 indexLetter={10}
                 />
             </h2>
              <Fade left>
                <p>Digital Marketing</p>
              </Fade>
              <Fade left>
                <p>Brand Marketing</p>
              </Fade>
              <Fade left>
                <p>Lead Generation</p>
              </Fade>
              <Fade left>
                <p>Social Media Marketing</p>
              </Fade>
              <Fade left>
                <p>Market Research</p>
              </Fade>
              
        
      </div>
    </article>

  
  </div>

  </>
  
}

export default Skills