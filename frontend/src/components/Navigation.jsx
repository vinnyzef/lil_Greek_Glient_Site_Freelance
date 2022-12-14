import React from 'react'


const Navigation = ({ active }) => {
  return (
    <div className='app__navigation'>

      {['home', 'order', 'menu', 'about'].map((item, index) => (
        <a href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: 'grey', border: '2px solid white' } : {}}
        >

        </a>

      ))}
    </div>
  )
}

export default Navigation