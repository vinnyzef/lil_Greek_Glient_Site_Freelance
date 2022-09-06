import React from 'react'
import './Menu.scss'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <motion.div id='menu'       
    whileInView={{x : [100, 0],y: [0,0], opacity: [0,1]}}
    transition={{duration: 0.5}}>
        <div
      className="menu__text"
        >
        <div className='meu__head'>
     <img src={images.falafel} alt="falafel"/>
    </div>

    <div className='menu__body'>
    <h1> OUR MENU</h1>
    <h2>Get a good look at whats to come on our menu so you're ready to order <span style={{color: '#002D62'}}> right away! </span> </h2> 
    <Link to= "/menu">
    <button className='menu__button'> SEE OUR MENU </button>
    </Link>

    </div>

    </div>
    </motion.div>
  )
}

export default AppWrap(Menu, 'menu')