import React from 'react'
import images from '../../constants/images'
import HeroImage from "../../components/HeroImage/HeroImage";

import AboutInfo from './AboutInfo/AboutInfo'
import SecondaryWrap from '../../Wrapper/SecondaryWrap';
import { Helmet } from 'react-helmet-async';
const AboutUs = () => {
  return (
    <div id= 'aboutus'>
       <Helmet>
       <title>About</title>
       <meta name='desciption' content="Find out more about Lil Greek and what we have to offer!"
      link rel='canonical' href='/about'/>
      </Helmet>
      <HeroImage
        bgImage={images.local}
        heading={[<span>locally owned</span>]}
        text=""
      />
      <AboutInfo />
    </div>
  )
}

export default SecondaryWrap(AboutUs, 'aboutus')