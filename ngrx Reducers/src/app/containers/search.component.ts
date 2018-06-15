import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Track } from './../models/track';
import { SpotifySearchService } from "../services/spotify.service";
import * as fromRoot from './../reducers/index';
import * as searchActions from './../actions/search';
import * as uiActions from './../actions/ui';


@Component({
  selector: 'sp-search',
  template: `
  <div class="w3-container">
    <sp-search-box [query]="query$ | async" (onSearch)="onNewQuery($event)"></sp-search-box>
    <sp-search-result-list [tracks]="tracks$ | async" (onSelect)="onSelect($event)"></sp-search-result-list>
    <p *ngIf="errorMessage$ | async">{{errorMessage$ | async}}</p>
  </div>
  `
})
export class SearchComponent implements OnInit {
  tracks$: Observable<Track[]>;
  query$: Observable<string>;
  errorMessage$: Observable<string>;


  constructor(
    private _store: Store<fromRoot.State>,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.tracks$ = this._store.select(state => state.search.ids.map(id => state.tracks.entities[id]));
    this.query$ = this._store.select(state => state.search.query);
    this.errorMessage$ = this._store.select(state => state.search.errorMessage);
  }

  onNewQuery(query: string) {
    this._store.dispatch(new searchActions.Start(query));
  }

  onSelect(trackId: string) {
    this._router.navigate(['/view', trackId], { relativeTo: this._route });
  }
}