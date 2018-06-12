import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { Priority } from '../priority';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  low = Priority.Low;
  normal = Priority.Normal;
  high = Priority.High;

  @Input() task: Task;
  @Output() onCompleted = new EventEmitter<Task>();
  @Output() onCancelled = new EventEmitter<Task>();

  setCompleted(task: Task) {
    task.completed = !task.completed;
    this.onCompleted.emit(task);
  };

  constructor() { }

  ngOnInit() {
  }

}
