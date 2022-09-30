import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import './DeliveryInfo.scss'

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color= '#002D62' />
                        <h3 className='heading-tertiary'>
                            Cater with <span>us!</span>
                        </h3>
                    </div>

                    <p>
We want to be your spot of choice for fine greek cuisine in Chicago! Scroll down to check out our pricing and options below!</p>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color= '#002D62' />
                        <h3 className='heading-tertiary'>
                           additional <span>information</span>
                        </h3>
                    </div>

                    <p>
So you want to cater some of the finest, newest Greek food in Chicago for your next event? Well, Lil Greek Kitchen is just the place you were looking for! Choose between our delicious tray or party pack options. Scroll down below to message us about a catering event, or email or call below.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfo