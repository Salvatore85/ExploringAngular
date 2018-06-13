import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class HttpTaskService extends TaskService {

  constructor(private http: HttpClient) { super(); }

  private _taskUrl = 'https://u2utasks.azurewebsites.net/tasks';

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this._taskUrl)
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
    console.error(error);
    return Observable.throw(error.json() || 'Server Error');
  }

  addTask(task: Task): Observable<Task[]> {
    return this.http.post<Task>(this._taskUrl, task)
    .switchMap(() => this.getAllTasks())
    .catch(this.handleError);
  }

  removeTask(task: Task): Observable<Task[]> {
    return this.http.delete<Task>('${this._taskUrl}/${task.id}')
    .switchMap(() => this.getAllTasks())
    .catch(this.handleError);
  }

  updateTask(task: Task): Observable<Task[]> {
    return this.http.put<Task>('${this._taskUrl}/${task.id}', task)
    .switchMap(() => this.getAllTasks())
    .catch(this.handleError);
  }

}
