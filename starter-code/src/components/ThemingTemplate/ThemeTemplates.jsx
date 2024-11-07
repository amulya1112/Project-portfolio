import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars,BsFillSunFill, BsXLg } from 'react-icons/bs'

import { useGlobalContext } from '../../hooks/contextAPI'

import "./themetemplate.scss"

const ThemeTemplates = () => {
    const {changeTemp, setChangeTemp, handleTemp, isTemplateOpen, setIsTemplate, closeTemplate, openTemplate, colorTheme, handleTheme}= useGlobalContext()
  return (
   <>
       {/* Fisettings wrapper */}
       <div className='theme-icon-wrapper' onClick={openTemplate}>
        <FiSettings className='theme-icon switch__color'/>
       </div>
       {/* theme wrapper */}
       <div className=
       {`${isTemplateOpen ?  'theme-wrapper show-template' : 'theme-wrapper'}`}>
        {/*theme-header */}
        <div className="theme-header">
            <span>Theme Template</span>
            <span>
                <BsXLg className='close-template switch__color'
                onClick={closeTemplate}/>
            </span>
        </div>
        {/*mode*/}
        <div className='mode'>
            <div onClick={()=> handleTheme("light-mode")}>
                <BsFillSunFill className='icon-switch__color'/>
            </div>
            <div onClick={()=> handleTheme("dark-mode")}>
                <BsMoonStars className='icon-switch__color'/>
            </div>
        </div>
        {/* temmplate wrapper */}
        <div className="template-wrapper">
            {/* template 1 wrapper */}
            <div onClick={() => handleTemp('template-1')} className="template">
                <div className="template-1"></div>
            </div>
            <div onClick={() => handleTemp('template-2')}className="template">
                <div className="template-2"></div>
            </div>
            <div onClick={() => handleTemp('template-3')}className="template">
                <div className="template-3"></div>
            </div>
            <div onClick={() => handleTemp('template-4')}className="template">
                <div className="template-4"></div>
            </div>
            <div onClick={() => handleTemp('template-5')}className="template">
                <div className="template-5"></div>
            </div>
        </div>
       </div>

   </>)
}

export default ThemeTemplates
