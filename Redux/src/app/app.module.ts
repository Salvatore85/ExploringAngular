import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { createStore, compose, Store } from 'redux';

import { APP_STORE } from './constants/constants';
import { TodoListComponent } from './todo-list.component';
import { StoreShape } from './reducers/store';
import { AppComponent } from './app.component';
import rootReducer from './reducers/store';
import { FilterListComponent } from "./filter-list.component";
import { VisibleTodosPipe } from "./visible-todos.pipe";

//add enhancer for dev tools
const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const appStore: Store<StoreShape> = enhancer(rootReducer);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoListComponent, FilterListComponent, VisibleTodosPipe],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_STORE, useValue: appStore }
  ]
})
export class AppModule { }
