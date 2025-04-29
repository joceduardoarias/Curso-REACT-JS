import React, { useRef, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const FormularioComponent = () => {
    const focusRef = useRef() //Defino el useRef
    const initalForm = {
        userName: '',
        email: '',
        password: ''
    }    
    const { formState, onInpuChange } = useForm(initalForm)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);

    }
    useEffect(() => {
      focusRef.current.focus() //Defino la acción que se va a ejecutar sobre un elemento del DOM       
    }, [])
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                    <input
                        ref={focusRef} //En este elemento del DOM se va enfocar cuando se cargue el componente
                        type="text"
                        className="form-control"
                        name='userName'
                        aria-describedby="emailHelp"
                        placeholder='Enter your UserName'
                        value={formState.name}
                        onChange={onInpuChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        aria-describedby="emailHelp"
                        placeholder='Enter your UserName'
                        value={formState.email}
                        onChange={onInpuChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={formState.password}
                        onChange={onInpuChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
