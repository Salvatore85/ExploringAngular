import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from './../models/track';

@Component({
  selector: 'sp-track-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="w3-card-8 w3-dark-grey track-container">

    <div class="w3-container w3-center">
      <h3>{{track.name}}</h3>
      <img [src]="track.image" [alt]="track.album">
      <h5>{{track.artist}}</h5>

      <div class="w3-section">
        <button (click)="addToPlaylist.emit(track.id)" *ngIf="!isInPlaylist" class="w3-button w3-green">Add to Playlist</button>
        <button (click)="removeFromPlaylist.emit(track.id)" *ngIf="isInPlaylist" class="w3-button w3-red">Remove from Playlist</button>
      </div>
    </div>

  </div>
  `,
  styles: [`
    .track-container {margin-top: 24px; margin-left:auto; margin-right:auto; max-width:500px;}
    img {width:80%;max-width:200px;}
  `]
})
export class TrackDetailsComponent {
  @Input() track: Track;
  @Input() isInPlaylist: boolean;
  @Output() addToPlaylist = new EventEmitter<string>();
  @Output() removeFromPlaylist = new EventEmitter<string>();
}