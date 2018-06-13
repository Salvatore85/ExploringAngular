import { TaskService } from '../task.service';
import { Priority, PRIORITIES } from '../priority';
import { Task } from '../task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styles: [`
.w3-modal { display: block; }
`]
})
export class TaskEditorComponent implements OnInit {

  @Input() task: Task;
  @Output() onRequestClose = new EventEmitter();
  priorities = PRIORITIES;

  constructor(private _taskService: TaskService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      'description': [this.task.description],
      'priority': [this.task.priority],
      'startDate': [moment(this.task.startDate).format('YYYY-MM-DD')],
      'endDate': [moment(this.task.endDate).format('YYYY-MM-DD')]
    });
  }

  close(): void {
    this.onRequestClose.emit();
  }

  getNameForPriority(priority: Priority): string {
    return Priority[priority];
  }

}
