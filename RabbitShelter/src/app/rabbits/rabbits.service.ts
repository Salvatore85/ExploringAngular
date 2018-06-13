import { Injectable } from '@angular/core';
import { Rabbit } from './rabbit';

@Injectable()
export class RabbitsService {

  rabbits: Rabbit[];

    constructor() {
      this.rabbits = [
        { name: 'George', age: 2, gender: 'M', desexed: true, vaccinated: true, adoptionFee: 50},
        { name: 'Gretel', age: 0.5, gender: 'F', desexed: true, vaccinated: true, adoptionFee: 30}
      ];
    }

    public getRabbits() {
        return this.rabbits;
    }

    public addRabbit(rabbit: Rabbit) {
        this.rabbits.push(rabbit);
    }


}
