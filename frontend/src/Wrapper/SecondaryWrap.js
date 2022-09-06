import React from 'react'

const SecondaryWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName}
    className={`app__container ${classNames}`}>
        {/* <SocialMedia/> */}

        <div className='app__wrapper app__flex'>
            <Component/>
        </div>
    </div>
  )
}

export default SecondaryWrap