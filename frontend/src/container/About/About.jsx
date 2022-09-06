import React from 'react'
import { AppWrap } from '../../Wrapper'
import'./About.scss'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id= "about">

    <div className='about__container'>
    <div className='about__header'>
    <h1>THE LIL' GREEK EXPERIENCE</h1>
    </div>
    <div className='about__text'>
    <p>
Lil' Greek Kitchen is a locally founded restaurant with a passion and love for quality Greek cuisine. Click here to learn more about us and how we strive to give each customer a positive experience every time they order.</p>
    </div>
    <Link to= "/our story">
    <button>LEARN MORE</button>
    </Link>

    <img src={images.hummus} alt='skepasti'/>
    </div>




    </div>
  )
}

export default AppWrap(About, 'about')