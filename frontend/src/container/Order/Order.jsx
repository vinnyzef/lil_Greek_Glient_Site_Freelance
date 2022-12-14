import React from 'react'
import'./Order.scss'
import images from '../../constants/images'
import { AppWrap } from '../../Wrapper'
import { motion } from 'framer-motion'

const Order = () => {
  return (
    <div id='menu app__header app__flex'>
        <div className="menu__text"     >
        <div className='meu__head'>

    </div>

    <div className='menu__body'>
    <h1> ONLINE ORDERING</h1>
    <h2>The wait is no more! Online ordering is now <span> available </span>.</h2> 
    {/* add next week */}
    {/* onClick={()=>window.scroll(0,0)} */}
    <a href='https://order.online/store/lil-greek-kitchen-chicago-24103822/?hideModal=true&pickup=true'>  <button className='menu__button'  > ORDER NOW </button></a>
    </div>
    <img src={images.burger} alt="falafel"/>
    </div>
    </div>
  )
}

export default AppWrap(Order, 'order')