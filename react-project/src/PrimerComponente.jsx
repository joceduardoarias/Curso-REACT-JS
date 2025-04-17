import React from 'react'

// Estas variables no son globales, son variables locales
// Están por fuera de la función de esta forma no se vuelven a crear cada vez que se renderiza el componente
const string = 'Hola Mundo'
const number = 1234
const boolean = true
const array = ['Curso React', 2, 'Practica', 4, 5]
const object = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
}
const fecha = new Date()
const funcion = () => {
  return 'Hola desde una funcion'
}
export const PrimerComponente = () => {
  return (
    <>
        <h1>{string}</h1>
        <h2>{number}</h2>
        <h3>{boolean ? 'Es verdadero' : 'Es falso'}</h3>
        <h4>{array}</h4>      
        <h5>{funcion()}</h5>
    </>    
  )
}
