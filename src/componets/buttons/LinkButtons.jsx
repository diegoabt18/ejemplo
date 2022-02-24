import React from 'react'
import './linkButtons.css'
const linkButtons = ({text, value, background, funcion}) => {
  return (
    <button className='buton' value={value} style={{background: background}} onClick={()=>{funcion(value)}}>
        {text}
    </button>
  )
}

export default linkButtons