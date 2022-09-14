import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';


const Header = () => {
    
  return (
    <div id ="home"className='app__header app__flex'>
    <div
    className="app__header-info">


            <div className='intro__container'>

            <h1 className='intro__text head-text'> <span>WELCOME </span>TO OUR KITCHEN<span>.</span>
            </h1>
            </div>

        <div className='text__container app__flex'>
            {/* CHANGE TO CONSULTING */}

        </div>
    



    </div>
    </div>
  )
}

export default AppWrap(Header, 'home')