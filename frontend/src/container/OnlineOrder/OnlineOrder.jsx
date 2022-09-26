import React from 'react'
import './OnlineOrder.scss'
import images from '../../constants/images'
import SecondaryWrap from '../../Wrapper/SecondaryWrap'
const OnlineOrder = () => {
  return (

    <div id="portfolio">
    <div className="background">
    <img src={images.bowl} alt="" />
  </div>
  <div className="content">
  <h1>ORDER <span>DIRECTLY</span> THROUGH US</h1>
    <h2>
    Click the link below to be sent to our online ordering page.
    </h2>
   <a href='https://www.lilgreekonline.com/s/order'><button>ORDER NOW</button></a> 
  </div>
  </div>
  )
}

export default SecondaryWrap(OnlineOrder, 'online');