import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Rabbit } from '../rabbit';
import { RabbitsService } from '../rabbits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  rabbit: Rabbit;

    constructor(private rabbitService: RabbitsService, private router: Router) { }

    ngOnInit() {
      this.rabbit = { name: '', age: 0, gender: 'F', desexed: false, vaccinated: false, adoptionFee: 0};
    }

    changeGender(gender: string) {
        this.rabbit.gender = gender;
    }

    save() {
        this.rabbitService.addRabbit(this.rabbit);
        this.router.navigate(['/rabbits']);
    }


}
