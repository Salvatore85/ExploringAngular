import { Component } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority'

@Component({
  selector: 'app-root',
  template: `
  <h1>Task Manager</h1>
  <div>
    <input [(ngModel)]="newTask.description"/>
    <select [(ngModel)]="newTask.priority">
      <option *ngFor="let priority of priorities" [ngValue]="priority">{{getNameForPriority(priority)}}</option>
    </select>
    <a href="" (click)="addTask(newTask, $event)">add new</a>
  </div>
  <ul>
    <li *ngFor="let task of tasks" 
    [class.low-priority]="task.priority===low" 
    [class.high-priority]="task.priority===high">
      {{task.description}}
    </li>
  </ul>`,
  styles: [`
  .high-priority {color: rgb(176, 50, 0);}
  .low-priority {color: rgb(0, 153, 176);}
  `],
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  low = Priority.Low;
  high = Priority.High;
  
  newTask: Task = { id: 0, description: '', completed: false, priority: Priority.Normal };
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

  getNextId(): number {
    return this.tasks.length + 1;
  }

  addTask(task: Task): void {
    task.id = this.getNextId();
    this.tasks.push(task);
    this.newTask = { id: 0, description: '', completed: false, priority: Priority.Normal };
    event.preventDefault();
  }

  tasks: Task[];
  constructor() {
    this.tasks = [
      { id: 1, description: 'fix heisenburg', completed: false, priority: Priority.Normal},
      { id: 1, description: 'set up fear-driven development', completed: false, priority: Priority.High},
      { id: 1, description: 'fix hindenburg', completed: false, priority: Priority.Low}
    ]
  }
}
