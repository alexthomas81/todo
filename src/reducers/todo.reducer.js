const InitialState = {
    todoList: [],
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

export function todoReducer(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_FORM': return AddTodo(state, action);
        case 'REMOVE_FORM': return RemoveTodo(state, action);
        default:
            return state;
    }
}