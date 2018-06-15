import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from '../models/track';

@Component({
  selector: 'sp-playlist-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <sp-playlist-item *ngFor="let track of tracks; trackBy: trackByFn" [track]="track" (onSelect)="onSelect.emit($event)"></sp-playlist-item>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      -webkit-justify-content: center;
    }
  `]
})
export class PlaylistListComponent {
  @Input() tracks: Track[];
  @Output() onSelect = new EventEmitter<string>();

  trackByFn(index: number, track: Track) {
    return track.id;
  }
}