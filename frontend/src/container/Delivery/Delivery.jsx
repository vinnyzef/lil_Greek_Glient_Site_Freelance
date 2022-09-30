import React from 'react'
import './Delivery.scss'
import images from '../../constants/images'
import SecondaryWrap from '../../Wrapper/SecondaryWrap'

const Delivery = () => {
  return (
      <div id ='Delivery'>
          <div className='delivery__container'>

      <div className='delivery__header'>
    <h1>THIRD PARTY ORDERING</h1>

    <p>We will soon be available on Doordash and EZ Cater for pick-up and delivery.
 
    </p>
    </div>
    <div className='thirdparty__links'>
    <div className='button_1'>
    <img src={images.doordash} alt="doordashimg"/>
    <button>COMING SOON</button>
    </div>
    <div className='button_2'>
    <img src={images.ubereats} alt="ubereatsimg"/>
    <button><a href='https://www.ubereats.com/store/lil-greek-kitchen-850-w-superior-st/BeG99f2HVsaqFBld_CZGqw'>ORDER NOW</a></button>
    </div>  
    <div className='button_3'>
    <img src={images.grubhub} alt="grubhubimg"/>
    <button><a href='https://www.grubhub.com/restaurant/lil-greek-kitchen-850-w-superior-st-chicago/4523248'>ORDER NOW</a></button>
    </div>
    <div className='button_4'>
    <img src={images.ez} alt="ezcaterimg"/>
   <button>COMING SOON</button>
    </div>

    </div>
    </div>
    
</div>
  )
}

export default SecondaryWrap(Delivery, 'delivery')