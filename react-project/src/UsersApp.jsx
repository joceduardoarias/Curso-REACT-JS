import { React, useEffect, useState } from 'react'
import { UserList } from "./components/UserList";
const UsersApp = () => {
    const [endPoint,setEndPoint] = useState('users');

    const handleVerComments = () =>{
        setEndPoint('comments')
    }

  return (
    <>
    <div>UsersApp</div>
    
    <UserList endPoint={endPoint}/>
    
    <button onClick={handleVerComments}>Ver comments</button>
    </>
  )
}

export default UsersApp