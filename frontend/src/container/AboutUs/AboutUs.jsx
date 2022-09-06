import React from 'react'
import images from '../../constants/images'
import HeroImage from "../../components/HeroImage/HeroImage";

import AboutInfo from './AboutInfo/AboutInfo'
import SecondaryWrap from '../../Wrapper/SecondaryWrap';
const AboutUs = () => {
  return (
    <div id= 'aboutus'>
      <HeroImage
        bgImage={images.falafel}
        heading={[<span>locally owned</span>]}
        text=""
      />
      <AboutInfo />
    </div>
  )
}

export default SecondaryWrap(AboutUs, 'aboutus')