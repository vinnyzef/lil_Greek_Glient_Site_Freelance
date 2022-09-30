import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion';
import { AppWrap } from '../../Wrapper';
import { Helmet } from 'react-helmet-async';

const Header = () => {
    
  return (

    <div id ="home"className='app__header app__flex'>
     <Helmet>
       <title>Lil Greek Kitchen Chicago</title>
       <meta name='desciption' content="Lil Greek Kitchen is a new Greek Kitchen Located at River West Food Junction that is dedicated to serving Chicago
       the best Greek Cuisine around"
      link rel='canonical' href='/'/>
      </Helmet>
    <div
    className="app__header-info">


            <div className='intro__container'>

            <h1 className='intro__text head-text'><span>WELCOME</span> TO LIL GREEK KITCHEN<span>.</span>
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