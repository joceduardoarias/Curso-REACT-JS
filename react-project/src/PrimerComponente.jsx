import React from 'react'
import PropTypes from 'prop-types'; 



export const PrimerComponente = ({titulo, subtitulo = "Subtitulo por defecto", entero}) => {
  console.log(titulo)
  console.log(subtitulo)
  console.log(entero)
  return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <h3>{entero + 1}</h3>
    </>    
  )
}

// Definimos los tipos de las propiedades que recibe el componente 
PrimerComponente.PropTypes = {
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  entero: PropTypes.number
}
// Definimos los valores por defecto de las propiedades que recibe el componente
PrimerComponente.defaultProps = {
  titulo: "Título por defecto",
  subtitulo: "Subtítulo por defecto",
  entero: 0
}