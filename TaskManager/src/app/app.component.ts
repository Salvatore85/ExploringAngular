import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority'

@Component({
  selector: 'app-root',
  template: `
  <header class="w3-container w3-teal">
    <h1>Task Manager</h1>
  </header>
  <div class="w3-row">
    <div class="w3-col m4 l3">
      <app-task-creator (onCreated)="addTaskToList($event)"></app-task-creator>
      <app-task-list [tasks]="tasks"></app-task-list>
    </div>
  </div>
  `,
  styles: [],
  //styleUrls: ['./app.component.css']
})
export class AppComponent {

  addTaskToList(task: Task): void {
    task.id = this.tasks.reduce((prev, t) => prev > t.id ? prev : t.id, 0) + 1;
    this.tasks.push(task);
  }
  
  // title = 'app';
  // low = Priority.Low;
  // high = Priority.High;
  
  // newTask: Task = { id: 0, description: '', completed: false, priority: Priority.Normal };
  // priorities = [Priority.Low, Priority.Normal, Priority.High];

  // getNameForPriority(priority: Priority): string {
  //   return Priority[priority];
  // }

  // getNextId(): number {
  //   return this.tasks.length + 1;
  // }

  // addTask(task: Task): void {
  //   task.id = this.getNextId();
  //   this.tasks.push(task);
  //   this.newTask = { id: 0, description: '', completed: false, priority: Priority.Normal };
  //   event.preventDefault();
  // }

  tasks: Task[];
  constructor() {
    // this.tasks = [
    //   { id: 1, description: 'fix heisenburg', completed: false, priority: Priority.Normal},
    //   { id: 1, description: 'set up fear-driven development', completed: false, priority: Priority.High},
    //   { id: 1, description: 'fix hindenburg', completed: false, priority: Priority.Low}
    // ];
  }

  ngOnInit(): void {
    this.tasks = [
      { id: 1, description: 'fix heisenburg', completed: false, priority: Priority.Normal},
      { id: 1, description: 'set up fear-driven development', completed: false, priority: Priority.High},
      { id: 1, description: 'fix hindenburg', completed: false, priority: Priority.Low}
    ];
  }
}
