import React from 'react'


export const PrimerComponente = ({titulo, subtitulo, entero}) => {
  console.log(titulo)
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <h3>{entero + 1}</h3>
    </>    
  )
}
