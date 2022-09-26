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
    <h2>Hold on just a little longer! Online ordering will be available<span> soon </span>.</h2> 
    {/* add next week */}
    {/* onClick={()=>window.scroll(0,0)} */}
    <a href='https://www.lilgreekonline.com/s/order'>  <button className='menu__button'  > ORDER NOW </button></a>
    </div>
    <img src={images.Spanakopita} alt="falafel"/>
    </div>
    </div>
  )
}

export default AppWrap(Order, 'order')