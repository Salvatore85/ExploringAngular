import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchBoxComponent } from './search-box.component';
import { SearchResultComponent } from './search-result.component';
import { SearchResultListComponent } from './search-result-list.component';
import { TrackDetailsComponent } from './track-details.component';
import { PlaylistListComponent } from './playlist-list.component';
import { PlaylistItemComponent } from './playlist-item.component';
import { RecentListComponent } from "./recent-list.component";
import { RecentItemComponent } from "./recent-item.component";
import { SafePipe } from "../pipes/safe.pipe";


export const COMPONENTS = [
  RecentListComponent,
  RecentItemComponent,
  SearchResultComponent,
  SearchResultListComponent,
  SearchBoxComponent,
  TrackDetailsComponent,
  PlaylistListComponent,
  PlaylistItemComponent,
  SafePipe,
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
