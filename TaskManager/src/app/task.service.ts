import { Injectable } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority';

@Injectable({
  providedIn: 'root'
})
export abstract class TaskService {

  abstract getAllTasks(): Task[];
  abstract addTask(task: Task): Task[];
  abstract removeTask(task: Task): Task[];
}
