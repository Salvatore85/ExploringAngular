import { Component, EventEmitter, Output } from '@angular/core';
import {Task}          from '../task';
import {Priority}      from '../priority';

@Component({
  selector: 'app-task-creator',
  template: `
<div class="w3-container w3-margin w3-border">

  <p>
    <label>Description</label>
    <input [(ngModel)]="newTask.description" class="w3-input" type="text"/>
  </p>

  <p>
    <label>Priority</label>
    <select [(ngModel)]="newTask.priority" class="w3-select">
      <option *ngFor="let priority of priorities" 
              [ngValue]="priority">
        {{getNameForPriority(priority)}}
      </option>
    </select>
  </p>

  <p>
    <a href="" (click)="addTask(newTask, $event)" class="w3-right">add new</a>
  </p>

</div>
`
})
export class TaskCreatorComponent {
  newTask: Task;
  priorities = [Priority.Low, Priority.Normal, Priority.High];

  @Output() onCreated = new EventEmitter<Task>();
    

  constructor() {
    this.resetTask();
  }

  addTask(task: Task, event: Event): void {
    this.onCreated.emit(task);
    this.resetTask();

    event.preventDefault();
  }

  private resetTask() {
    this.newTask = new Task();
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}
