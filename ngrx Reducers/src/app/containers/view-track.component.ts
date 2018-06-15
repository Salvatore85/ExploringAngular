import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { pluck, map } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { Track } from './../models/track';
import * as fromRoot from './../reducers/index';
import * as trackActions from './../actions/tracks';
import * as playlistActions from './../actions/playlist';


@Component({
  selector: 'sp-view-track',
  template: `
  <div class="w3-container w3-center">
    <sp-track-details [track]="track" [isInPlaylist]="isInPlaylist"
                      (addToPlaylist)="addToPlaylist($event)" (removeFromPlaylist)="removeFromPlaylist($event)" >
    </sp-track-details>
  </div>
  `
})
export class ViewTrackComponent implements OnInit, OnDestroy {
  track = new Track('1', 'track1', 'artist1','','','');
  isInPlaylist = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() { }

  ngOnDestroy() { }

  addToPlaylist(trackId: string) { }

  removeFromPlaylist(trackId: string) { }

}