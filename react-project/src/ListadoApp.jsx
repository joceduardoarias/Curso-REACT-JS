import React, { useState } from 'react'

const Item = ({ nombre, visto }) => {
    return <li>{nombre}
        {visto ? '✅' : '❌'}
    </li>
}

const Item1 = ({ nombre, visto }) => {
    return <li>{nombre}
        {visto && '✅'}
    </li>
}

const ListadoApp = () => {
    let array = [
        {nombre:"Desarrollo", visto:true},
        {nombre:"UseState", visto:true},
        {nombre:"Hooks", visto:true},
        {nombre:"Redux", visto:false},
        {nombre:"CustomHooks", visto:false}
    ]
    let array1 = [
        {nombre:"Desarrollo", visto:true},
        {nombre:"UseState", visto:true},
        {nombre:"Hooks", visto:true},
        {nombre:"Redux", visto:false},
        {nombre:"CustomHooks", visto:false}
    ]
    const [temas, setTemas] = useState(array);
    const [tema1, setTemas1] = useState(array);
    
    const handleAddTema = () =>{
        setTemas([...temas,{nombre:"Nuevo nombre", visto:false}])
        setTemas1([...temas,{nombre:"Nuevo nombre", visto:false}])
    }

    return (
        <>
            <h2>Operador ternario ??</h2>
            <ol>{temas.map(tema => <Item key={tema.nombre} nombre={tema.nombre} visto={tema.visto}></Item>)}</ol>
            <h2>Otra forma de utilizar ternario doble &&</h2>
            <ol>{tema1.map(tema => <Item1 key={tema.nombre} nombre={tema.nombre} visto={tema.visto}></Item1>)}</ol>
            <button onClick={handleAddTema}>Agregar Tema</button>
        </>
    )
}

export default ListadoApp