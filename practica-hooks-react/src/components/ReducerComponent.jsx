const initialState = [{
    id: 1,
    tarea: 'Explicar Reducer',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}
const action = {
    type: '[TAREAS] Agregar tarea',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
    if (action.type === '[TAREAS] Agregar tarea') {
       return [...state, action.payload]
    }
    return state
}

console.log(tareaReducer(initialState, action));

export const ReducerComponent = () => {
    return (
        <>
        </>
    )
}
