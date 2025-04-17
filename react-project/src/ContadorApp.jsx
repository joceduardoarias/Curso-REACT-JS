import React from 'react'
import { useState } from 'react';

export const ContadorApp = ({entero}) => {
    const [contador, setContador] = useState(entero);
    
    const handleClick = () =>{        
        setContador(contador + 1);
        console.log(contador);
    }
  return (
    <>
        <h1>Contador App</h1>
        <h2>{contador}</h2>
        <button onClick={handleClick}>Contador</button>
        <p>0</p>        
    </>
  )
}

export default ContadorApp