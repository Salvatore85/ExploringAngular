import { Component, OnInit } from '@angular/core';
import { RabbitsService } from '../rabbits.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(private rabbitService: RabbitsService) {}

  getRabbits() {
    return this.rabbitService.getRabbits();
  }

  setClasses(gender: string) {
    return {
      'card-content': true,
      'white-text': true,
      'indigo': gender === 'M',
      'pink': gender === 'F'
    };
  }
  public ngOnInit() {}
}
