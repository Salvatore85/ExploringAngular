import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from '../models/track';

@Component({
  selector: 'sp-playlist-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div (click)="onSelect.emit(track.id)" class="w3-card-4 result-container">
    <div class="w3-container">
      <h4><b>{{track.name}}</b></h4>    
      <p>{{track.artist}}</p>
      <iframe [src]="track.embedUrl | safe" width="200" height="100" frameborder="0" allowtransparency="true"></iframe>
    </div>
  </div>
  `,
  styles: [`
    .result-container{width:92%;max-width:300px;margin-top:24px;margin-right:24px;cursor:pointer;}
  `]
})
export class PlaylistItemComponent {
  @Input() track: Track;
  @Output() onSelect = new EventEmitter<string>();
}