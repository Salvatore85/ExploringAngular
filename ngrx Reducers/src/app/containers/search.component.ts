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
    <sp-search-box [query]="'query'" (onSearch)="onNewQuery($event)"></sp-search-box>
    <sp-search-result-list [tracks]="[]" (onSelect)="onSelect($event)"></sp-search-result-list>
    <p>error</p>
  </div>
  `
})
export class SearchComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() { }

  onNewQuery(query: string) { }

  onSelect(trackId: string) {
    this._router.navigate(['/view', trackId], { relativeTo: this._route });
  }
}