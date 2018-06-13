import { TaskService } from '../task.service';
import { Priority, PRIORITIES } from '../priority';
import { Task } from '../task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as moment from 'moment';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styles: [`
.w3-modal { display: block; }
.ng-touched.ng-invalid { border-bottom: 1px solid #f44336 !important;}
.ng-touched.ng-valid { border-bottom: 1px solid #009688 !important;}
`]
})
export class TaskEditorComponent implements OnInit {

  form: FormGroup;

  @Input() task: Task;
  @Output() onRequestClose = new EventEmitter();
  priorities = PRIORITIES;

  constructor(private _taskService: TaskService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      'description': [this.task.description, Validators.required, Validators.maxLength(50)],
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

  onSubmit(): void {
    if(this.form.valid){
    this.task.description = this.form.value.description;
    this.task.priority = this.form.value.priority;
    this.task.startDate = moment(this.form.value.startDate).toDate();
    this.task.endDate = moment(this.form.value.endDate).toDate();

    this._taskService.updateTask(this.task);

    this.close();
    }

    this.form.controls['endDate']
    .setValidators(CustomValidators.notBefore(this.form.controls['startDate']));

    this.form.controls['startDate'].valueChanges
    .subscribe((newStartDate: string) => {
      this.form.controls['endDate'].updateValueAndValidity();
    });
  }

}
