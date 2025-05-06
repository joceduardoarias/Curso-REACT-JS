import React, { useContext } from 'react'
import {UsuarioContext} from '../context/UsuarioContext'

const HomeScreem = () => {
  const {usuario} = useContext(UsuarioContext)
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Email</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{usuario.nombre}</td>
            <td>{usuario.tecnologia}</td>
            <td>{usuario.mail}</td>
            <td>{usuario.redes}</td>
          </tr>         
        </tbody>
      </table>
    </>
  )
}

export default HomeScreem