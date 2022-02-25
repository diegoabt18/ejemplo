import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
      <h1>hola</h1>
        <img src={props.image} />
        <h1>{props.name}</h1>
        <h3>{props.house}</h3>
    </div>
  )
}

export default Card
