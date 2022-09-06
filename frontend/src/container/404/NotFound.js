import React from 'react'
import SecondaryWrap from '../../Wrapper/SecondaryWrap'
import'./NotFound.scss'
const NotFound = () => {
  return (
    <div id="lost">
        <div className='lost__text'>
        <h1> Lost? Return to home page.</h1>
        <a href='/'>
        <button>Return Home</button>
        </a>
        </div>

        </div>
  )
}

export default SecondaryWrap(NotFound, '404')