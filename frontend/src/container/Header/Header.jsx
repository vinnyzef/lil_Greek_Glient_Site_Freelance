import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';
import { Helmet } from 'react-helmet-async';

const Header = () => {
    
  return (

    <div id ="home"className='app__header app__flex'>
     <Helmet>
       <title>Lil Greek Kitchen</title>
       <meta name='desciption' content="Lil Greek Kitchen opening soon at River West Food Junction(850 W, Superior, Chicago,Il) and serving 
      all of the Chicagoland area very soon!"
      link rel='canonical' href='/order%20online'/>
      </Helmet>
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