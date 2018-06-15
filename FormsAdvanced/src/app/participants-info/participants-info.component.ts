import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-participants-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './participants-info.component.html',
  styleUrls: ['./participants-info.component.css']
})
export class ParticipantsInfoComponent {
  @Input() parent: FormGroup;

  @Output() onRemoveRequested = new EventEmitter<number>();
  @Output() onAddRequested = new EventEmitter();
  
  get participants() {
    return this.parent.get('participants') as FormArray;
  }
}
