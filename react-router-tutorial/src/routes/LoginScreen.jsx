import React from 'react'
import { useForm } from '../hooks/useForm'
import {UsuarioContext} from '../context/UsuarioContext'
import { useContext } from 'react'

export const LoginScreen = () => {
    const initalForm = {
        nombre: '',
        tecnologia: '',
        email: '',
        redes: ''
    }
    const { formState, onInpuChange } = useForm(initalForm)
    const { setUsuario } = useContext(UsuarioContext)

    const onSubmit = (event)=>{
        event.preventDefault()
        console.log(formState)
        setUsuario(formState)
    }
    return (
        <>
            <form className='container' onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="nombre" 
                    value={formState.nombre}
                    onChange={onInpuChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="tecnologia"
                    value={formState.tecnologia}
                    onChange={onInpuChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    value={formState.email}
                    onChange={onInpuChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="redes" className="form-label">Redes</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="redes" 
                    value={formState.redes}
                    onChange={onInpuChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
}
