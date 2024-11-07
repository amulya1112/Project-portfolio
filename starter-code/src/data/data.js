import React from 'react'

// react-icons
import { FiGrid, FiLinkedin, FiYoutube, FiFigma } from 'react-icons/fi'
import { ImBlogger } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsGoogle,
} from 'react-icons/bs'

import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiFuturelearn,
  SiSass,
  SiJquery,
  SiExpress,
  SiRedux,
} from 'react-icons/si'

import { GrGithub, GrTwitter, GrInstagram } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript, IoLogoGameControllerB } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'

// sidebar menu functionality
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  
  {
    text: 'Services',
    icon: (
      <ImBlogger
        className="link-icon"
        style={{ fill: 'current', stroke: 'current' }}
      />
    ),
    url: '/services',
  },
  {
    text: 'Skills',
    icon: <VscProject className="link-icon" />,
    url: '/skills',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
  
]
// social media icons
const socialIcons = [
  
  {
    icon: <FiYoutube className="icon switch__color" />,
    url: 'http://www.youtube.com/@ankitbangwal9662',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://x.com/AnkitBangwal4?t=9ErtKgz01mEhfyIyj2OTtw&s=09',
  },
  {
    icon: <GrInstagram className="icon switch__color" />,
    url: 'https://www.instagram.com/bangwal_ankit?igsh=YzljYTk1ODg3Zg==',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/ankitbangwal/',
  },
]
// skills card
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
    url: '',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: '',
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: 'JQUERY',
    url: '',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
    url: '',
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: 'EXPRESS JS',
    url:
      'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'Redux',
    url: 'https://redux.js.org/introduction/getting-started',
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: 'Figma',
    url: 'https://figma.com',
  },
  {
    icon: <BsGoogle className="skills-icon switch__color" />,
    spanText: 'Googling',
    url: 'https://google.com',
  },
]

export { sideBarMenu, socialIcons, skillSet }
