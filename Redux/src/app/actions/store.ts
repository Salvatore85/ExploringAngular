//import { Action } from "rxjs/internal/scheduler/Action";
//import { TodoListComponent } from "../todo-list.component";



//ActionTypes
export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    SET_CURRENT_FILTER: 'SET_CURRENT_FILTER',
};

//Action Creators
export const addTodo = (text: string) => {
    return {
        type: ActionTypes.ADD_TODO,
        text: text
    };
};

export const removeTodo = (id: number) => {
    return {
        type: ActionTypes.REMOVE_TODO,
        id: id
    };
};

export const toggleTodo = (id: number) => {
    return {
    type: ActionTypes.TOGGLE_TODO,
    id: id
    };
};

export const setCurrentFilter = (filter: string) => {
    return {
        type: ActionTypes.SET_CURRENT_FILTER,
        filter: filter
    };
};



