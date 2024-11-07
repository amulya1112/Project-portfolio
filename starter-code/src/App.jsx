import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom/'

import './App.scss'
//import Home from './pages/home/Home'
//import About from './pages/about/About'

//import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
//import ThemeTemplates from './components/ThemingTemplate/ThemeTemplates'

import {Sidebar , ThemeTemplates} from './components'

import {Home, About, Contact, Skills, } from './pages'
import Services from './pages/services/Services'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar/>
    <ThemeTemplates/>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
    </Routes>


    </BrowserRouter>)
}

export default App
