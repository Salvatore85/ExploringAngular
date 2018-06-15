import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent {
  @Input() parent: FormGroup;
}
