import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';


const Header = () => {
    
  return (
    <div id ="home"className='app__header app__flex'>
    <motion.div
    whileInView={{x : [-100, 0], opacity: [0,1]}}
    transition={{duration: 0.5}}
    className="app__header-info">


            <div className='intro__container'>

            <h1 className='intro__text head-text'> <span>WELCOME </span>TO OUR KITCHEN<span>.</span>
            </h1>
            </div>

        <div className='text__container app__flex'>
            {/* CHANGE TO CONSULTING */}

        </div>
    



    </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')