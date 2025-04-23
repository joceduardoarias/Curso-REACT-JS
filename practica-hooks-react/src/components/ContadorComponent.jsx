import React from 'react'
import { UseCounter } from '../hooks/UseCounter'

const ContadorComponent = () => {
  const {contador, incrementar, decrementar, resetear} = UseCounter(0)

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button className='btn btn-primary' onClick={() => incrementar(1)}>+</button>
      <button className='btn btn-primary' onClick={() => resetear()}>reset</button>
      <button className='btn btn-danger' onClick={() => decrementar(1)}>-</button>
    </>
  )
}

export default ContadorComponent