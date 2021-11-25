
export const ADD_TODO = 'ADD_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const DELETE_TODO = 'DELETE_TODO'

// const action = {
//     type: '',
//     payload: {
//         id: '',
//         content: '',
//         check: false
//     },
// }

export function addTodo(newtodo) {
    return {
        type: ADD_TODO,
        payload: newtodo,
    }
}

export function checkTodo(id) {
    return {
        type: CHECK_TODO,
        payload: id,
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}