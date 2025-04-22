import { React, useEffect, useState } from 'react'

export const UserList = ({endPoint}) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {                
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()        
        setData(data)
    }

    useEffect(() => {
        fetchData()         
    }, [endPoint]) // Es util cuando la dependencia en este caso el valor de endPoint cambia. Si la
                  // dependencia esta vacía solo se llama a useEffect cuando se cargar la primerar vez
                  // el componente.
                   
  return (
    <>
    <ul>
    {endPoint == 'users' ? data.map(item => <li key={item.id}>{item.name}</li> )
                         : data.map(item => <li key={item.id}>{item.body}</li> )}
    </ul>
        
    </>
  )
}

export default UserList