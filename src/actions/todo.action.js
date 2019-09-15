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

export const searchCountryName = (countryname) => {
    return (dispatch => {
        dispatch(SearchCountry(countryname));
    })
}
