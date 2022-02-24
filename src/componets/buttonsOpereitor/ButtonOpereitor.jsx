import React from 'react'

const ButtonOpereitor = ({ text, value, background, funcion, opereitor }) => {
    return (
        <button className='buton' value={value} style={{ background: background }} onClick={() => { opereitor(value); funcion(value);}}>
            {text}
        </button>
    )
}

export default ButtonOpereitor
