import { TaskService } from '../task.service';
import { Priority, PRIORITIES } from '../priority';
import { Task } from '../task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styles: [`
.w3-modal { display: block; }
`]
})
export class TaskEditorComponent {

  @Input() task: Task;
  @Output() onRequestClose = new EventEmitter();
  priorities = PRIORITIES;

  constructor(private _taskService: TaskService) { }

  close(): void {
    this.onRequestClose.emit();
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}
