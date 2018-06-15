import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromRoot from './../reducers/index';
import * as uiActions from './../actions/ui';

@Component({
  selector: 'sp-app',
  template: `
  <sp-recent-sidebar [isOpen]="false" (onCloseRequested)="closeSidebar()"></sp-recent-sidebar>
  <div class="w3-bar w3-green">
    <a routerLink="/" class="w3-bar-item w3-button w3-mobile">My PlayList</a>
    <a routerLink="/search" class="w3-bar-item w3-button w3-mobile">Search</a>
    <a (click)="openSidebar($event)" href class="w3-bar-item w3-button w3-mobile w3-right">View Recent</a>
    <div class="sp-loader"></div>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openSidebar(event: Event) {
    event.preventDefault();
  }

  closeSidebar() { }

}
