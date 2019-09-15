//  Action - type & payload
function AddTodo(todo) {
    return {
        type: 'ADD_FORM',
        payload: todo,
    }
}

function RemoveTodo(item) {
    return {
        type: 'REMOVE_FORM',
        payload: item,
    }
}


// Add To Cart - Action Creator
export const addTodoForm = (todo) => {
    return (dispatch => {
        dispatch(AddTodo(todo));
    })
}

export const removeTodoForm = (item) => {
    return (dispatch => {
        dispatch(RemoveTodo(item));
    })
}