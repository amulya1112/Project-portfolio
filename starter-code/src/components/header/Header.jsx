import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Blast from '../BlastAnimation/Blast'
import './header.scss'
import Logo from '../logoAnimation/Logo'

const nameArray =[" "," ","A", "n" ,"k", "i" , "t"]
const jobArray =["F", "o", "u", "n", "d", "e", "r","  "," ", "a", "t", " "," ", "D", "i", "g","i","h", "e", "r","o","n"]
const Header = () => {
  const [letterClass, setLetterClass]= useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")

    }, 4000)
  })
  return (
    <section className='section-1 header__container section__padding'>
        <main className='intro-page'>
            <h1>
              <span className={`${letterClass} _12`}>H</span>
              <span className={`${letterClass} _13`}>i</span>     
              <span className={`${letterClass} _14`}>,</span>         
              <br/>
              <span className={`${letterClass} _15`}>I</span>
              <span className={`${letterClass} _16`}>'</span>
              <span className={`${letterClass} _17`}>m</span>
              {''}
                <Blast 
                 letterClass={letterClass} 
                 arrayStr={nameArray}  
                 indexLetter={12} 
                 />{''} 
                 <br/>
                <Blast 
                 letterClass={letterClass} 
                 arrayStr={jobArray} 
                 indexLetter={11}
                 />
            </h1> <br/>
            <p className='text-description'>
                Digital Marketing / Market Research
            </p>

            <Link to={"/contact"} className='contact-button'>
             <div>
                <span className='bg switch-bg'></span>
                <span className='bg switch__border-color'></span>
                <span className='text'>Contact me</span>
             </div>
            </Link>
            <Logo/>
        </main>
    </section>
  )
}

export default Header
