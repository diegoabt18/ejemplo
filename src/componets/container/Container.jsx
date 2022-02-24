import React from 'react'
import './Container.css'
import { useState } from 'react'
import LinkButtons from '../buttons/LinkButtons'
import ButtonOpereitor from '../buttonsOpereitor/ButtonOpereitor'

const Container = () => {
  const [count, setCount] = useState("");
  const [operador, setOperador] = useState("");

  function opereitor(signo) {
    setOperador(signo);
  }

  function contar(num) {
    let concatenar = count + num;
    setCount(concatenar)
  }

  function resultado() {
    console.log(parseInt(count));
    console.log(operador);
    let split = count.split(operador);
    let general;
    switch (operador) {
      case "+":
        
        general = parseInt(split[0]) + parseInt(split[1])
        break;
      case "-":
        general = parseInt(split[0]) - parseInt(split[1])
        break;
      case "*":
        general = parseInt(split[0]) * parseInt(split[1])
        break;
      case "/":
        general = parseInt(split[0]) / parseInt(split[1])
        break;
    }
    setCount(general)
  }

  return (
    <div className="containerButtons">
      <div>
        <h1> {count}</h1>
        <h2>{operador}</h2>
      </div>
      <div className='Bloque'>
        <div className='Botones'>
          <LinkButtons text="1" value="1" background="red" funcion={contar} />
          <LinkButtons text="2" value="2" name="blue" funcion={contar} />
          <LinkButtons text="3" value="3" name="blue" funcion={contar} />
          <LinkButtons text="4" value="4" name="blue" funcion={contar} />
          <LinkButtons text="5" value="5" name="blue" funcion={contar} />
          <LinkButtons text="6" value="6" name="blue" funcion={contar} />
          <LinkButtons text="7" value="7" name="blue" funcion={contar} />
          <LinkButtons text="8" value="8" name="blue" funcion={contar} />
          <LinkButtons text="9" value="9" name="blue" funcion={contar} />
          <LinkButtons text="0" value="0" name="blue" funcion={contar} />
        </div>
        <div className='Operadores'>
          <ButtonOpereitor text="+" value="+" background="white" funcion={contar} opereitor={setOperador} />
          <ButtonOpereitor text="-" value="-" background="white" funcion={contar} opereitor={setOperador} />
          <ButtonOpereitor text="*" value="*" background="white" funcion={contar} opereitor={setOperador} />
          <LinkButtons text="=" value="=" background="white" funcion={resultado} />
        </div>
      </div>

    </div>
  )
}

export default Container