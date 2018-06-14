import { Component, Inject } from '@angular/core';
import { Store } from 'redux';

import { StoreShape } from "./reducers/store";
import { APP_STORE } from './constants/constants';

import { addTodo } from './actions/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( @Inject(APP_STORE) private store: Store<StoreShape>) { }

  private addTodo(value) {
    this.store.dispatch(addTodo(value));
  }

}
