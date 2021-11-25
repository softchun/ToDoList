import { ADD_TODO, CHECK_TODO, DELETE_TODO } from '../actions/todoAction'

const initialState = {
    todo: []
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const updatedState = [...state.todo, action.payload]
            return {
                ...state,
                todo: updatedState
            }

        case CHECK_TODO:
            const updatedTodo = state.todo.map((item) => ({
                ...item,
                check:
                    item.id === action.payload.id ? !item.check : item.check,
            }))

            return {
                ...state,
                todo: updatedTodo
            }

        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((item) => item.id !== action.payload.id),
            }

        default:
            return state
    }
}