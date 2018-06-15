import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Track } from '../models/track';

@Component({
  selector: 'sp-recent-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ul class="w3-ul">
    <li *ngFor="let track of tracks; trackBy: trackByFn" [sp-recent-item]="track" (onSelect)="onSelect.emit($event)"></li>
  </ul>
  `
})
export class RecentListComponent {
  @Input() tracks: Track[];
  @Output() onSelect = new EventEmitter<string>();

  trackByFn(index: number, track: Track) {
    return track.id;
  }

}