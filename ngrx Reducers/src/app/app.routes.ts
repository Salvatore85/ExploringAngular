import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './containers/search.component';
import { PlayListComponent } from './containers/playlist.component';
import { ViewTrackComponent } from './containers/view-track.component';
import { AuthenticatedGuard } from "./services/authenticated.guard";

const routes: Routes = [
  { path: '', component: PlayListComponent, canActivate: [AuthenticatedGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthenticatedGuard] },
  { path: 'view/:id', component: ViewTrackComponent, canActivate: [AuthenticatedGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }