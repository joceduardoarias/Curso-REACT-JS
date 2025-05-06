import { UsuarioContext } from "./UsuarioContext"
import { useState } from "react"

export const UsuarioProvider = ({children}) => {
    
    const [usuario, setUsuario] = useState({})
    
    return (
        //Se provee de la infromación del usuario
        //a todos los children
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}
