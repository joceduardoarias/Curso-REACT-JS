import { React, useState} from 'react'

const AgregarTarea = () => {
    const [inputValue,setInputValue] = useState('')
    const handleInputValue = (event) =>{        
        console.log(event.target.value);
        setInputValue(event.target.value)        
    }
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        console.log(event);
        setInputValue('')
    }
  return (
    <>
        <form action="" onSubmit={handleOnSubmit}>
            <input 
            type="text"
            placeholder="Ingresar tarea" 
            value={inputValue}
            onChange={handleInputValue}/>
        </form>
    </>
  )
}

export default AgregarTarea