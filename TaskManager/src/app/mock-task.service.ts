import { Injectable } from '@angular/core';
import { Task } from './task';
import { Priority } from './priority'
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class MockTaskService extends TaskService {

  private tasks = [
    { id: 1, description: 'fix heisenburg', completed: false, priority: Priority.Normal},
    { id: 1, description: 'set up fear-driven development', completed: false, priority: Priority.High},
    { id: 1, description: 'fix hindenburg', completed: false, priority: Priority.Low}
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    return this.tasks = this.tasks.concat(task);
  }

  removeTask(task: Task): Task[] {
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      return this.tasks = [].concat(this.tasks.slice(0, index), this.tasks.slice(index + 1));
    }
    return this.tasks;
  }

}
