import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { CurrentComponent } from './current/current.component';

@NgModule({
  imports: [
    CommonModule,
    CurrentRoutingModule
  ],
  declarations: [CurrentComponent]
})
export class CurrentModule { }
