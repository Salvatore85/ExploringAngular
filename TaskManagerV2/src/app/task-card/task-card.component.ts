import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task}          from '../task';
import {Priority}      from '../priority';

@Component({
  selector: 'app-task-card',
  template: `
<div class="w3-card-4 w3-margin w3-padding-bottom u2u-hand"
     [class.w3-light-blue]="task.priority === low"
     [class.w3-dark-grey]="task.priority === normal"
     [class.w3-pink]="task.priority === high"
     (click)="onClicked.emit(task)">
  <i class="material-icons w3-left" *ngIf="task.completed">done</i>
  <i class="material-icons w3-right">launch</i>
  <div class="w3-container w3-center w3-padding">
    <h3>{{task.description}}</h3>
    
    <button class="w3-btn w3-green" (click)="setCompleted(task, $event)">Completed</button>
    <button class="w3-btn w3-red" (click)="setCancelled(task, $event)">Cancel</button>
  </div>

</div>

`,
styles: [`.u2u-hand {cursor: pointer;}`]  
})
export class TaskCardComponent {
  low = Priority.Low;
  normal = Priority.Normal;
  high = Priority.High;

  @Input() task: Task;
  @Output() onClicked = new EventEmitter<Task>();
  @Output() onCompleted = new EventEmitter<Task>();
  @Output() onCancelled = new EventEmitter<Task>();

  setCompleted(task: Task, event: Event) {
    task.completed = !task.completed;
    this.onCompleted.emit(task);
    event.stopPropagation();
  };

  setCancelled(task: Task, event: Event) {
    this.onCancelled.emit(task);
    event.stopPropagation();
  }

  

}
