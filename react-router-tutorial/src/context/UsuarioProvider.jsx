import { UsuarioContext } from "./UsuarioContext"

const usuario = {
    nombre: 'jarias',
    tecnologia: 'React',
    mail: 'jarias@gmail.com',
    redes: '@jarias'
}
export const UsuarioProvider = ({children}) => {
    return (
        //Se provee de la infromación del usuario
        //a todos los children
        <UsuarioContext.Provider value={{usuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}
