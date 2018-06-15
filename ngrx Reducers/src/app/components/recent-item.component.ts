import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from './../models/track';

@Component({
  selector: '[sp-recent-item]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div (click)="onSelect.emit(track.id)">
    <img src="{{track.image}}" class="w3-left w3-circle w3-margin-right" style="width:50px">
    <span class="w3-large">{{track.name}}</span><br>
    <span>{{track.artist}}</span>
  </div>  
  `,
  styles: [`
    :host {cursor:pointer;}
    .result-container{width:92%;max-width:300px;margin-top:24px;margin-right:24px;cursor:pointer;}
  `]
})
export class RecentItemComponent {
  @Input('sp-recent-item') track: Track;
  @Output() onSelect = new EventEmitter<string>();
}