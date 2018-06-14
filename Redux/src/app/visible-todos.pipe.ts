import { Pipe, PipeTransform } from '@angular/core';

import { TodoItem } from "./models/todoItem";
import { Filter } from "./models/filter";

@Pipe({
  name: 'visibleTodos'
})
export class VisibleTodosPipe implements PipeTransform {
  transform(todos: TodoItem[], filter: string) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }

}