import React from 'react'
import './Menu.scss'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { motion } from 'framer-motion'
import images from '../../constants/images'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div id='menu'>
        <div
      className="menu__text2"
        >
        <div className='meu__head'>
     <img src={images.falafel} alt="falafel"/>
    </div>

    <div className='menu__body'>
    <h1> OUR MENU</h1>
    <h2>Get a good look at whats to come on our menu so you're ready to order  right away! </h2> 
    <Link to= "/menu"onClick={()=>window.scroll(0,0)}>
    <button className='menu__button'> SEE OUR MENU </button>
    </Link>

    </div>

    </div>
    </div>
  )
}

export default AppWrap(Menu, 'menu')