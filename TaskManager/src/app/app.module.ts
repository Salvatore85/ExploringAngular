import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { MockTaskService } from './mock-task.service';


@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    TaskCardComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: TaskService, useClass: MockTaskService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
