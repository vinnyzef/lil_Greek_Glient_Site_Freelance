import React from 'react'
import './OnlineOrder.scss'
import images from '../../constants/images'
import SecondaryWrap from '../../Wrapper/SecondaryWrap'
const OnlineOrder = () => {
  return (

    <div id="portfolio">
    <div className="background">
    <img src={images.skepasti} alt="" />
  </div>
  <div className="content">
  <h1>ORDER <span>DIRECTLY</span> THROUGH US</h1>
    <h2>
    Click the link below to be sent to our ordering page. No third parties involved, straight to the source.
    </h2>
    <button>COMING SOON</button>
  </div>
  </div>
  )
}

export default SecondaryWrap(OnlineOrder, 'online');