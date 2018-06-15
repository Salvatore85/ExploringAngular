import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { pluck, map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { Track } from './../models/track';
import * as fromRoot from './../reducers/index';
import * as trackActions from './../actions/tracks';
import * as playlistActions from './../actions/playlist';


@Component({
  selector: 'sp-view-track',
  template: `
  <div class="w3-container w3-center">
    <sp-track-details [track]="track$ | async" [isInPlaylist]="isInPlaylist$ | async"
                      (addToPlaylist)="addToPlaylist($event)" (removeFromPlaylist)="removeFromPlaylist($event)" >
    </sp-track-details>
  </div>
  `
})
export class ViewTrackComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  track$: Observable<Track>;
  isInPlaylist$: Observable<boolean>;

  constructor(private _store: Store<fromRoot.State>,
    private _route: ActivatedRoute,
    private _router: Router) { }


  ngOnInit() {
    this.sub = this._route
      .paramMap.pipe(
        tap(val => console.log(val)),
        pluck('params','id'),
        map((id: string) => new trackActions.Select(id))
      )
      .subscribe(action => this._store.dispatch(action));

    this.track$ = this._store.select(state => state.tracks.entities[state.tracks.selectedId]);
    this.isInPlaylist$ = this._store.select(state => state.playlist.ids.indexOf(state.tracks.selectedId) > -1);

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  addToPlaylist(trackId: string) {
    this._store.dispatch(new playlistActions.AddTrack(trackId));
  }

  removeFromPlaylist(trackId: string) {
    this._store.dispatch(new playlistActions.RemoveTrack(trackId));
  }

}