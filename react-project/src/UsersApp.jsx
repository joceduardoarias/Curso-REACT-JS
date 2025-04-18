import { React, useEffect, useState } from 'react'

const UsersApp = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async (data) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        data = await response.json()
        console.log(data);
        setUsers(...users, data)
    }
    useEffect(() => {
        fetchUsers()         
    }, [])
    
  return (
    <>
    <div>UsersApp</div>
    <ul>
        {users.map(user =><li key={user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersApp