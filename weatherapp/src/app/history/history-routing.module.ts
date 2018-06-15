import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryModule } from './history.module';

const routes: Routes = [
  { 
    path: 'history', component: HistoryModule,
    children: [
      { path: }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
