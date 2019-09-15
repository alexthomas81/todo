//  Action - type & payload
function AddTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

function RemoveTodo(item) {
    return {
        type: 'REMOVE_TODO',
        payload: item,
    }
}

function UpdateTodo(index, value) {
    return {
        type: 'UPDATE_TODO',
        payload: { index: index, value: value },
    }
}

function SearchCountry(countryname) {
    return {
        type: 'SEARCH_COUNTRY',
        payload: countryname,
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

export const updateTodoForm = (index, value) => {
    return (dispatch => {
        dispatch(UpdateTodo(index, value));
    })
}
export const searchCountryName = (countryname) => {
    return (dispatch => {
        dispatch(SearchCountry(countryname));
    })
}

