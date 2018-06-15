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
    <sp-playlist-list [tracks]="tracks" (onSelect)="onSelect($event)"></sp-playlist-list>
  </div>
  `
})
export class PlayListComponent implements OnInit {
  tracks: Track[] = [new Track('1', 'name1', 'artist1','', '', ''), new Track('2', 'name2', 'artist2','', '', '')];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {  }

  onSelect(trackId: string) {
    this._router.navigate(['/view', trackId], { relativeTo: this._route });
  }

}