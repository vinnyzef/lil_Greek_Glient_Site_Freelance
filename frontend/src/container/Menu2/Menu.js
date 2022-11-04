import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import images from "../../constants/images";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'
import { Helmet } from "react-helmet-async";
import './Menu.scss'

const Menu2 = () => {
  return (
    <div id= "menu">
     <Helmet>
       <title>Menu</title>
       <meta name='desciption' content="Hey Chicago! Take a look at what we have to offer!"
      link rel='canonical' href='/menu'/>
      </Helmet>
      <HeroImage
        bgImage={images.plate2}
        heading={[<span>OUR Menu</span>]}
        text=""
      />
       {/* <div className="banner-content">
            <h1 className="heading-primary"><span>OUR Menu</span></h1>
            <p className="text-white"></p>
        </div> */}
      <MenuOfTheDay />
      <CoffeeSelection />
      <Breakfast />
      <Beverages />
    </div>
  );
};

export default Menu2;
