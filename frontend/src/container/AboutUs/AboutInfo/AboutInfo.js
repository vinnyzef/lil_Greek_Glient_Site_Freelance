import React from "react";

import "./AboutInfo.scss";
import {BsFillStarFill} from 'react-icons/bs'

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>


            <p>
               Lil' Greek Kitchen is a locally owned and operated restaraunt that bring delicious, tasty Greek Cuisine to the Chicagoland area.{" "}
              We pride ourselves on bringing the best food to you each and every time that you order.
              Chicago has been in need for some authentic and enticing Greek Cuisine and that is exactly what we are here to do! So next time you consider ordering takeout 
              or delivery, make the right decision and order 
              <span className="special-word"> Lil' Greek.</span>
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
            WE VALUE AUTHENTICITY AND <span>QUALITY</span>
            </h2>

            <p>
             {" "}
                Each and every dish is put together
              to achieve customer satisfaction with every delicious bite. When you order through
              Lil' Greek Kitchen you are ensuring that your meal will be made with the upmost quality and delectable taste.
              Our dishes are homemade recipes that will be sure to have you coming back for more. With that all being
              said...<span className="special-word">what are you waiting for ?</span> Order fom Lil' Greek Kitchen!
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
