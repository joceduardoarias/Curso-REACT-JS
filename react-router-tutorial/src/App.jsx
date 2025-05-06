import React from 'react'
import NavBar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomeScreem from './routes/HomeScreem'
import AboutScreen from './routes/AboutScreen'
import ContacScreen from './routes/ContacScreen'
import {UsuarioProvider} from './context/UsuarioProvider'
import { LoginScreen } from './routes/LoginScreen'

const App = () => {
    return (
        <UsuarioProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<HomeScreem/>}/>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route path='/about' element={<AboutScreen/>}/>
                <Route path='/contact' element={<ContacScreen/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </UsuarioProvider>
    )
}

export default App