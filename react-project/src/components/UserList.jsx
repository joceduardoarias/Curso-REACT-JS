import { React, useState } from 'react'
import { useFetchData } from '../hooks/useFetchData'

export const UserList = ({ endPoint }) => {
  const { data, isLoadind } = useFetchData(endPoint);

  return (
    <>
      <ul>
        {isLoadind
          ? <p>Cargando ...</p>
          : endPoint == 'users'
            ? data.map(item => <li key={item.id}>{item.name}</li>)
            : data.map(item => <li key={item.id}>{item.body}</li>)}
      </ul>

    </>
  )
}

export default UserList