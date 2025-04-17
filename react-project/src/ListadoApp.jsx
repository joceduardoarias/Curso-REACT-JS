import React from 'react'

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
    return (
        <>
            <h2>Operador ternario ??</h2>
            <Item nombre={"Desarrollo"} visto={true}></Item>
            <Item nombre={"UseState"} visto={true}></Item>
            <Item nombre={"Hooks"} visto={true}></Item>
            <Item nombre={"Redux"} visto={false}></Item>
            <Item nombre={"CustomHooks"} visto={false}></Item>
            <h2>Otra forma de utilizar ternario doble &&</h2>
            <Item1 nombre={"Desarrollo"} visto={true}></Item1>
            <Item1 nombre={"UseState"} visto={true}></Item1>
            <Item1 nombre={"Hooks"} visto={true}></Item1>
            <Item1 nombre={"Redux"} visto={false}></Item1>
            <Item1 nombre={"CustomHooks"} visto={false}></Item1>
        </>
    )
}

export default ListadoApp