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
      <div className='about__body'>
    <div className='about__header'>
    <h1>Need Catering? It's Just a Couple Clicks Away!</h1>
    </div>
    <div className='about__text'>
    <h3>
Catering is our thing. You need catering for your next special event? We've got you covered! We have mulitple ways to
go about catering, as well as a party plan that will be sure have your mouth watering! Click below to find out more.
</h3>
    </div>
    <Link to= "/catering" onClick={()=>window.scroll(0,0)}>
    <button>I WANT CATERING</button>
    </Link>
    </div>
    <img src={images.hummus} alt='skepasti'/>
    </div>




    </div>
  )
}

export default AppWrap(About, 'about')