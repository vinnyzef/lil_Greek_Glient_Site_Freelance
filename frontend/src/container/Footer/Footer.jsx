import {React, useState, useEffect} from 'react'
import './Footer.scss'
import images from '../../constants/images'
import { Newsletter } from '../../components'
import {FaFacebookF, FaTiktok} from 'react-icons/fa'
import { BsInstagram,BsSnapchat} from 'react-icons/bs'
import { client } from '../../client'
import { AiOutlineCheckSquare } from "react-icons/ai";

const Footer = () => {
  const [formData, setFormData] = useState({ email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {email} = formData;
  const handleChangeInput=(e)=>{

    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit=()=>{
    setLoading(true)
    const NewsLetter = {
      _type: 'newsletter',
      email:email,
    }
    client.create(NewsLetter)
    .then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }
  return (
    <div id="footer">

        <div className='footer__container'>
        <div className='footer__info'>
        <div className='footer__hours'>
        <h3>
        Pickup & Delivery Hours
        </h3>
        <p>
        Monday - Thursday: 11 am - 10 pm
        <p>
        Friday - Saturday: 11 am - 11 pm
        </p>
        <p>
        Sunday: Closed
        </p>
        <p>
        850 W. Superior Chicago, IL 60642
        </p>
        <p>
        <a classname= "westline__link"href='https://www.westlinefoodjunction.com/'>
        Located in the Westline Food Junction
        </a>
        </p>
        </p>
        </div>
        <div className='footer__contact'>
        <h3>
       Contact Us
        </h3>
        <p>
        Email:  lilgreekkitchen@gmail.com
        </p>
        <p>
        Phone:  +1(630)-677-4147
        </p>
        <p>
        Instagram: @lilgreekkitchen
        </p>
        </div>
        </div>


        <div className='footer__logo'>
        <a href='/'>
            {<img src={images.lilgreeklogo} alt='lil greek kitchen'/>}
            </a>
            <p> Locally Owned </p>
            <div className='footer__icons'> 
            <a href="https://instagram.com/lilgreekkitchen?igshid=YmMyMTA2M2Y="> <BsInstagram/></a>    
            <a><FaTiktok/></a>
            <a><BsSnapchat/></a>
            <a href='https://www.facebook.com/lilgreekkitchen'><FaFacebookF/></a>
            </div>


        </div>
        <div className='footer__newsletter'>

    <div className='footer__head'>
        <h1 >Subscribe To Our Newsletter</h1>
      <p>And never miss latest Updates!</p>
    </div>

    {!isFormSubmitted ? 
    <div className="footer__newsletter-input">
        <input
     type="email" placeholder= "Your Email" name="email" value={email} onChange={handleChangeInput}></input>
      <button type="button" className="custom__button"  onClick={handleSubmit}>{loading ? 'Submitting' : 'Submit'}</button>

      </div>
         //submitted response
         : <div className='submit__message2'>
           {/* <h3>Thank you for Subscribing!</h3> */}
           <button type="button" className="custom__button">Submitted <AiOutlineCheckSquare/></button>
         </div>}

        </div>





        </div>


    </div>
  )
}

export default Footer;