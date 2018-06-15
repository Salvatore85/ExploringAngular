import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Track } from "../models/track";
import * as fromRoot from './../reducers/index';
import * as uiActions from './../actions/ui';


@Component({
  selector: 'sp-recent-sidebar',
  template: `
  <div class="w3-sidebar w3-bar-block w3-card-2 w3-animate-right" [class.side-closed]="!isOpen">
    <button (click)="onCloseRequested.emit()" class="w3-bar-item w3-button w3-large">Recently viewed &times;</button>
    <sp-recent-list [tracks]="tracks$ | async" (onSelect)="onSelect($event)"></sp-recent-list>
  </div>
  `,
  styles: [`
    .w3-sidebar { right:0; width:300px; }
    .side-closed { display: none; }
  `]
})
export class RecentSidebarComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() onCloseRequested = new EventEmitter();
  tracks$: Observable<Track[]>;


  constructor(private _store: Store<fromRoot.State>,
    private _route: ActivatedRoute,
    private _router: Router) { }


  ngOnInit() {
    this.tracks$ = this._store.select(state => state.recent.ids.map(id => state.tracks.entities[id]));
   }

  onSelect(trackId: string) {
    this._router.navigate(['/view', trackId], { relativeTo: this._route });
  }

}