const initailState = [{
    id: 1,
    todo: 'Learn React',
    isCompleted: false
}];

const todoReducer = (state = initailState, action) => {
    switch (action?.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

let todos = todoReducer();

const newtodo = {
    id: 2,
    todo: 'Learn Redux',
    isCompleted: false
}

const actions = {
    type: 'ADD_TODO',
    payload: newtodo
}

todos = todoReducer(todos, actions);

console.log(todos);