
import HeroImage from "../../components/HeroImage/HeroImage";
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from './AddToCart/AddToCart'
import images from '../../constants/images';
import './Delivery.scss'
import {React, useState, useEffect} from 'react'
import { client } from "../../client";
import { BsAsterisk } from "react-icons/bs";
import SecondaryWrap from "../../Wrapper/SecondaryWrap";
import PartyPack from "./PartyPack/PartyPack";
import { Helmet } from "react-helmet-async";

const Catering = () => {
  const [formData, setFormData] = useState({first: '',last: '', email:'',message:'',subject:'',phone:'',date:'', time:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { email, message, first, last, subject, phone, date, time} = formData;
  const handleChangeInput=(e)=>{

    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit=()=>{
    setLoading(true)
    const contact = {
      _type: 'cater',
      first: first,
      last: last,
      email:email,
      subject: subject,
      message:message,
      phone:phone,
      date:date,
      time:time
    }

    console.log(email)
    console.log(message)
    client.create(contact)
    .then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }
  return (
    <div id="cater">
     <Helmet>
       <title>Catering</title>
       <meta name='desciption' content="Take a look at our catering menu and ways to order!"
      link rel='canonical' href='/catering'/>
      </Helmet>
      <HeroImage
        bgImage={images.cateringShot}
        heading={["", <span>Catering</span>]}
        text="Delivery avialable Mon – Fri, 10am – 16pm"
      />
      <DeliveryInfo />
      <PartyPack/>
      <h3 className="info__cater2">*ONLY $15.95 PER PERSON!*</h3>
      <AddToCart />
      <>

    <div className='catering__form1'>
    <h3 className="info__cater">*All trays feed up to 10 people!*</h3>
    
    <h2>
      Need catering for your upcoming event?<span>  Message us below</span>, or follow our EZ Cater link!
    </h2>
    <div
    className='app__footer-cards'>
      <div
      className='app__footer-card'>
        <img src={images.email} alt="email"/>
        <a href='mailto:lilgreekkitchen@gmail.com'>lilgreekkitchen@gmail.com</a>
      </div>
      <div className='app__footer-card'>   
       <img src={images.delivery} alt="email"/>
           <a className="ezcater__link" href="https://www.ezcater.com/catering/pvt/lil-greek-kitchen-3">ez cater online catering </a>
         </div>
         <div className='app__footer-card'>   
       <img src={images.delivery} alt="email"/>
           <a className="ezcater__link" href="https://www.lilgreekonline.com/s/order">lilgreekonline.com catering</a>
         </div>
      <div
      className='app__footer-card'>
        <img src={images.phone} alt="mobile"/>
        <a href='tel: +1(630)-677-4147'>+1(630)-677-4147</a>
      </div>
    </div>

    </div>
{!isFormSubmitted ? 
    <div
    className='catering__form2'>
      <div
    >
        <input
     type="text" placeholder= "First Name" name="first" value={first} onChange={handleChangeInput}></input>
      </div>
      <div
    >
        <input
     type="text" placeholder= "Last Name" name="last" value={last} onChange={handleChangeInput}></input>
      </div>
      <div
>
        <input
     type="email" placeholder= "Email" name="email" value={email} onChange={handleChangeInput}></input>
      </div>
      <div
>
        <input
     type="text" placeholder= "Subject" name="subject" value={subject} onChange={handleChangeInput}></input>
      </div>
      <div>
        <input 
          type="date"
            placeholder='Date of Event' value={date} name="date" style={{color:'gray'}} onChange={handleChangeInput}></input>
      </div>
      <div>
        <input 
          type="time"
            placeholder='Time of Event' value={time} name="time" style={{color:'gray'}} onChange={handleChangeInput}></input>
      </div>
      <div>
        
        <textarea 
            placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}></textarea>
      </div>
      <div
>
        <input
     type="tel" placeholder= "Phone Number" name="phone" value={phone} onChange={handleChangeInput}></input>
      </div>

      <button
      type="button" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    //submitted response
      : <div className='submit__message'><h3>Thank you for getting in touch, we will email you back as soon as possible!</h3></div>}
    </>
    </div>
  )
}

export default SecondaryWrap(Catering, 'cater')