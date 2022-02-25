import React, { useEffect, useState } from 'react';
import Card from '../card/Card'

const Cards = ({ currentItems }) => {
    console.log("deberia tener item")
    console.log(currentItems)
    const [estado, setEstado] = useState([]);
    console.log("----------estado")
    console.log(estado)
    
    useEffect(() => {
        setEstado(currentItems);
        console.log("entro al estado")
    
    }, [currentItems])

    return (
        <div className='card'>
            <h1>componente cards</h1>
            {
                estado.map((item) => (                
                    <Card image={item.image} name={item.name} house={item.house} />
                ))
            }
        </div>
    )
}

export default Cards