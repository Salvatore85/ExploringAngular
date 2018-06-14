import { Component, Inject, OnDestroy } from '@angular/core';
import { Store, Unsubscribe } from "redux";

import { APP_STORE } from "./constants/constants";
import { StoreShape } from "./reducers/store";
import { TodoItem } from "./models/todoItem";
import { toggleTodo, removeTodo } from "./actions/store";

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos | visibleTodos:currentFilter"
          (click)="onTodoClick(todo.id)"
          [class.strike]="todo.completed">
        {{todo.text}}
        <button (click)="removeTodo(todo.id)">delete</button>
      </li> 
    </ul>
  `,
  styles: [
    `.strike {text-decoration: line-through}`
  ]
})
export class TodoListComponent implements OnDestroy {
  currentFilter: string;
  todos: TodoItem[];

  constructor( @Inject(APP_STORE) private store: Store<StoreShape>) {

  }

  private onTodoClick(id) {
    
  }

  private removeTodo(id) {
    
  }

  ngOnDestroy() {
    //remove listener
    
  }
}