import { useReducer } from 'react'
import { useForm } from '../hooks/useForm'

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar Reducer',
    finalizada: false
}]

const tareaReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            console.log("Agregar");
            return [...state, action.payload]
        case '[TAREAS] Editar tarea':
            console.log("Editar");
            return state.map(tarea => {
                if (tarea.id ==action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                }
                return tarea
            })
        case '[TAREAS] Eliminar tarea':
            console.log("eliminar");
            return state.filter(tarea => {
                if (tarea.id != action.payload) {
                    return tarea
                }
            })
        case '[TAREAS] Borrar tareas':
            console.log("borrar todo");
            return []
        default:
            return state
    }
}

// console.log(tareaReducer(initialState, action));


export const ReducerComponent = () => {
    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)
    const initalForm = {
        tarea: '',
    }
    const { tarea, formState, onInpuChange } = useForm(initalForm)

    const handleAddTask = (event) => {
        event.preventDefault()

        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar tarea',
            payload: tarea
        }
        dispatch(action)
    }
    const finalizarTaskHnadle = (id) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Editar tarea',
            payload: id
        }
        dispatch(action)
    }
    const deleteTaskHandle = (id) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Eliminar tarea',
            payload: id
        }
        dispatch(action)
    }
    const resetHandle = () => {
        const action = {
            type: '[TAREAS] Borrar tareas',
            payload:''          
        }
        dispatch(action)
    }
    return (
        <>
            <form onSubmit={handleAddTask}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        value={tarea}
                        placeholder="Ingresar tarea"
                        onChange={onInpuChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={resetHandle}>Reset</button>
            </form>
            <hr />
            <ul className='list-group'>
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className='list-group-item d-flex justify-content-between'>
                            <span>{item.tarea}</span>
                            <input
                                type="checkbox"
                                value={item.finalizada}
                                onChange={() => finalizarTaskHnadle(item.id)}
                            />
                            <button 
                            className='btn btn-danger'
                            onClick={()=>{deleteTaskHandle(item.id)}}
                            >Borrar</button>
                        </li>

                    )
                })}
            </ul>
        </>

    )
}
