import React from 'react'
import './linkButtons.css'
const linkButtons = ({text, value, background}) => {
  return (
    <button className='buton' value={value} style={{background: background}}>
        {text}
    </button>
  )
}

export default linkButtons