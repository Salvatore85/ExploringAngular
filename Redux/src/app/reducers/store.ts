import { TodoItem } from "../models/todoItem";
import { ActionTypes } from "../actions/store";

export interface StoreShape {
  todos: TodoItem[],
  currentFilter: string
}

const initialState = {
  todos: [],
  currentFilter: 'SHOW_ALL'
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case ActionTypes.ADD_TODO:
          let nextId = getNextId(state.todos);
          return {
              todos: state.todos.concat({
                  id: nextId,
                  text: action.text,
                  completed: false
              }),
              currentFilter: state.currentFilter
          };
      case ActionTypes.REMOVE_TODO:
          return {
              todos: state.todos.filter(todo => todo.id != action.id),
              currentFilter: state.currentFilter
          };
      case ActionTypes.TOGGLE_TODO:
          return {
              todos: toggleTodo(state.todos, action.id),
              currentFilter: state.currentFilter
          };
      case ActionTypes.SET_CURRENT_FILTER:
      default:
      return state;
  }
};

function toggleTodo(todos, id) {
  //map returns new array
  return todos.map(todo => {
      //skip other items
      if (todo.id !== id)
          return todo;
          //toggle
          return {
              id: todo.id,
              text: todo.text,
              completed: !todo.completed
          };
  });
}

export default rootReducer;


//helper functions
function getNextId(todos: TodoItem[]): number {
  var maxId = todos.reduce((prev, todo) => prev > todo.id ? prev : todo.id, 0);
  return maxId + 1;
}