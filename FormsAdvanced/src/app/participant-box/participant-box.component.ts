import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-participant-box',
  changeDetection: ChangeDetectionStrategy.OnPush,  
  templateUrl: './participant-box.component.html',
  styleUrls: ['./participant-box.component.css']
})
export class ParticipantBoxComponent  {
  @Input() parent: FormGroup;
  @Input() index: number;

  @Output() onRemoveRequested = new EventEmitter<number>();

  removeParticipantBox(index:number, e:MouseEvent) : void {
    e.preventDefault();
    this.onRemoveRequested.emit(index);
  }

}
