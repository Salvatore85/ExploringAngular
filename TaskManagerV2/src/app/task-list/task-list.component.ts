import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  template: `
    <app-task-card *ngFor="let task of tasks" [task]="task" 
            (onCancelled)="onCancelled.emit($event)"
            (onClicked)="onTaskClicked.emit($event)"></app-task-card>
  `,
  styles: []
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() onCancelled = new EventEmitter<Task>();
  @Output() onTaskClicked = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit() {
  }

}
