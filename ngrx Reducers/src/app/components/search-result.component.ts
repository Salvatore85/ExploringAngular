import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from '../models/track';

@Component({
  selector: 'sp-search-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div (click)="onSelect.emit(track.id)" class="w3-card-4 result-container">
    <img [src]="track.image" [alt]="track.album">
    <div class="w3-container">
      <h4><b>{{track.name}}</b></h4>    
      <p>{{track.artist}}</p>
    </div>
  </div>
  `,
  styles: [`
    .result-container{width:92%;max-width:300px;margin-top:24px;cursor:pointer;}
    .result-container img {width:100%;opacity:0.85;}
  `]
})
export class SearchResultComponent {
  @Input() track: Track;
  @Output() onSelect = new EventEmitter<string>();
}