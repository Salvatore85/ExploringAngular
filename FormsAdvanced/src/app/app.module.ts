import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipantBoxComponent } from './participant-box/participant-box.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ParticipantsInfoComponent } from './participants-info/participants-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantBoxComponent,
    CourseInfoComponent,
    ParticipantsInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
