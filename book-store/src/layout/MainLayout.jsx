import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../layout/NavBar'

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet /> 
        </div>
    )
}

export default MainLayout