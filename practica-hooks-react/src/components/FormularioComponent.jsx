import React, { useState } from 'react'

export const FormularioComponent = () => {
    const [formState, setFormState] = useState({
        userName:'luis luis',
        email:'luisluis@plm.com',
        password:'123456'

    });
    
    const {userName, email, password} = formState 
    
    const onInpuChange = ({target}) =>{
        const {name, value} = target        
        setFormState({
            ...formState,
            [name]: value
        })
        
    }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);
        
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name='userName' 
                    aria-describedby="emailHelp"
                    placeholder='Enter your UserName'
                    value={userName}
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
                    value={email}
                    onChange={onInpuChange}
                    />                        
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    name='password'
                    value={password}
                    onChange={onInpuChange}
                    />
                </div>              
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
