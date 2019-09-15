const InitialState = {
    todoList: [],
    countryname: '',
};

const AddTodo = (state, action) => {
    console.log(action.payload);
    const { payload } = action;
    return {
        ...state,
        todoList: [...state.todoList, payload],
    }
}

const RemoveTodo = (state, action) => {
    console.log(action.payload);
    const { payload } = action;
    return {
        ...state,
        ...state.todoList.splice(payload, 1),
        todoList: [...state.todoList],
    }
}

const SearchCountry = (state, action) => {
    console.log(action.payload);
    const { payload } = action;
    return {
        ...state,
        countryname: payload,
    }
}

export function todoReducer(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_TODO': return AddTodo(state, action);
        case 'REMOVE_TODO': return RemoveTodo(state, action);
        case 'SEARCH_COUNTRY': return SearchCountry(state, action);
        default:
            return state;
    }
}