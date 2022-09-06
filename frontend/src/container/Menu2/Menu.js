import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import images from "../../constants/images";
import MenuOfTheDay from "./MenuOfTheDay/MenuOfTheDay";
import Breakfast from './Breakfast/Breakfast'
import CoffeeSelection from './CoffeeSelection/CoffeeSelection'
import Beverages from './Beverages/Beverages'
import './Menu.scss'

const Menu2 = () => {
  return (
    <div id= "menu">
      <HeroImage
        bgImage={images.falafel}
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
