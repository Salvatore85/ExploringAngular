import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Track } from './../models/track';
import * as fromRoot from './../reducers/index';


@Component({
  selector: 'sp-playlist',
  template: `
  <div class="w3-container">
    <sp-playlist-list [tracks]="tracks$ | async" (onSelect)="onSelect($event)"></sp-playlist-list>
  </div>
  `
})
export class PlayListComponent implements OnInit {
  tracks$: Observable<Track[]>;

  constructor(private _store: Store<fromRoot.State>,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() { 
    this.tracks$ = this._store.select(state => 
      state.playlist.ids.map(id => state.tracks.entities[id]));
   }

  onSelect(trackId: string) {
    this._router.navigate(['/view', trackId], { relativeTo: this._route });
  }

}