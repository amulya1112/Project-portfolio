import React from 'react'
import Header from '../../components/header/Header'

import About from '../about/About'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import Skills from '../skills/Skills'

const Home = () => {
  return (
    <>
    <Header/>
    <section className='section-about'>
     <About/>
    </section>
    <Services/>
    <Contact/>
    <Skills/>
  

    </>
  )
}

export default Home
