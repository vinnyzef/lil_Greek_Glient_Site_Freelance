import React, { useState } from 'react'
import './Navbar.scss'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'

import images from '../../constants/images';

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className='app__navbar'>
      
        <div className='app__navbar-logo'>

        <a href='/'>
            {<img src={images.lilgreeklogo} alt='LilGreekKicthenImg'/>}
            </a>
        </div>
        <ul className='app__navbar-links'>
            {['order online','menu','catering','about','contact'].map((item)=><li className='app__flex p-text' key={`link-${item}`}>
                <div/>
                <a href={`${item}`}>{item}</a>
                {/* } */}
 
            </li>
            )}


        </ul>
        <div className='nav__hours'>
              <p>MONDAY - THURSDAY: 11 am - 9 PM</p>
              <p>FRIDAY - SATURDAY: 12 PM - 12 AM</p>
              <p>SUNDAY: 12 PM - 8 PM</p>
            </div>
            
        <div className='app__navbar-menu'>

        <HiMenuAlt4 onClick={()=> settoggle(true)} />

        {
           toggle && (<motion.div
           whileInView={{x: [300,0]}}
           transition={{duration: 0.85, ease: 'easeOut'}}>

          <HiX onClick={()=> settoggle(false)}/>
          <ul>
          {['order online','menu','catering','about','contact'].map((item)=> (<li key={item}>
            <a href={`${item}`}onClick={()=> settoggle(false)}>{item}</a>
            </li>
            ))}
           </ul>

     

           </motion.div> 
          )}
        </div>
    </nav>
  )
}

export default Navbar