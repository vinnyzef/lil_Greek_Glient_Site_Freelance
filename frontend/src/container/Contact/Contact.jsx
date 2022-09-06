import {React, useState, useEffect} from 'react'
import images from '../../constants/images'
import { client } from '../../client'

import './Contact.scss'
import SecondaryWrap from '../../Wrapper/SecondaryWrap'
const Contact = () => {
  const [formData, setFormData] = useState({name: '', email:'',message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;
  const handleChangeInput=(e)=>{

    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleSubmit=()=>{
    setLoading(true)
    const contact = {
      _type: 'contact',
      name: name,
      email:email,
      message:message,
    }

    client.create(contact)
    .then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }
  return (
    <>
    <div className='top__footer'>
    <h2>
      Have a question?<span> Let's get in touch</span>!
    </h2>
    <div
    className='app__footer-cards'>
      <div
      className='app__footer-card'>
        <img src={images.email} alt="email"/>
        <a href='mailto:vincentzefran@gmail.com' >lilgreekkitchen@gmail.com</a>
      </div>
      <div
      className='app__footer-card'>
        <img src={images.phone} alt="mobile"/>
        <a href='tel: +1 (773) 991-0722' >+1 (773) 000-0000</a>
      </div>
    </div>

    </div>
{!isFormSubmitted ? 
    <div
    className='app__footer-form'>
      <div
    >
        <input
     type="text" placeholder= "Your Name" name="name" value={name} onChange={handleChangeInput}></input>
      </div>
      <div
>
        <input
     type="email" placeholder= "Your Email" name="email" value={email} onChange={handleChangeInput}></input>
      </div>
      <div>
        <textarea 
            placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}></textarea>
      </div>
      
      <button
      type="button" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    //submitted response
      : <div className='submit__message'><h3>Thank you, our team will email you back as soon as possible!</h3></div>}
    </>
  )
}

export default SecondaryWrap(Contact, 'contact')