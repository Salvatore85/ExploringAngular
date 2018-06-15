import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history/history.component';
import { RainfallComponent } from './rainfall/rainfall.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  declarations: [HistoryComponent, RainfallComponent, TemperatureComponent]
})
export class HistoryModule { }
