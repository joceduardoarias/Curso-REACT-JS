import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const UsuariosComponent = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h1>Lista de usuarios</h1>

            {isLoading
                ? <h4>Cargando...</h4>
                : errors
                    ? <p>Ha ocurrido un error: {errors}</p>
                    : <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item =>
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.website}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>}

        </>
    )
}
