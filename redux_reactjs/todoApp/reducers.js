import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions.js";

const initialState = {
    VisibilityFilters: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: {
                    text: action.text,
                    completed: false
                }
            }
        case COMPLETE_TODO:
            return Object.assign({}, state, {
                todos: [
                ...state.todos.slice(0, action.index),
                Object.assign({}, state.todos[action.index], {
                    completed: true
                }),
                ...state.todos.slice(action.index + 1)
                ]
            });
        case SET_VISIBILITY_FILTER:
            return { 
                ...state, 
                VisibilityFilters: action.filter 
            }
    
        default:
            return state
    }
}

export default todoApp;