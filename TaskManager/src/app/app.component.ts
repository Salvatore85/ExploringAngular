import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority'
import { TaskService } from './task.service';

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

  tasks: Task[];
  constructor(private _taskService: TaskService) {
    
  }

  ngOnInit(): void {
    this.tasks = this._taskService.getAllTasks();
  }

  addTaskToList(task: Task): void {
    this.tasks = this._taskService.addTask(task);
  }

  removeTaskFromList(task: Task): void {
    this.tasks = this._taskService.removeTask(task);
  }
}
