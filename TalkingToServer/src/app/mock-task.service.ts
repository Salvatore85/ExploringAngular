import { Task } from './task';
import { Priority } from './priority';
import { Injectable } from '@angular/core';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MockTaskService extends TaskService {
  private tasks: Task[] = [
    new Task(1, 'fix heisenbug', false, Priority.Normal, new Date(2016,9,20), new Date(2016, 9, 21)),
    new Task(2, 'set up fear-driven development', false, Priority.High, new Date(2016, 10, 20), new Date(2016, 10, 25)),
    new Task(3, 'fix hindenbug', false, Priority.Low, new Date(2016, 11, 17), new Date(2016, 11, 24))
  ];

  getAllTasks(): Observable<Task[]> {
    return Observable.of(this.tasks);
  }

  addTask(task: Task): Observable<Task[]> {
    return Observable.of(this.tasks = this.tasks.concat(task));
  }

  removeTask(task: Task): Observable<Task[]> {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      return Observable.of(this.tasks = [].concat(this.tasks.slice(0,index), this.tasks.slice(index + 1)));
    }
    return Observable.of(this.tasks);
  }

  updateTask(task: Task): Observable<Task[]> {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      return Observable.of(this.tasks = [].concat(this.tasks.slice(0,index),task, this.tasks.slice(index + 1)));
    }
    return Observable.of(this.tasks);
  }

}
