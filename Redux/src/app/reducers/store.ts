import { TodoItem } from "../models/todoItem";

//shape


//initial state


//reducer


//helper functions
function getNextId(todos: TodoItem[]): number {
  var maxId = todos.reduce((prev, todo) => prev > todo.id ? prev : todo.id, 0);
  return maxId + 1;
}