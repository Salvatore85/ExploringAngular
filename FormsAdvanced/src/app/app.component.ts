import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm: FormGroup;
  participants: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.participants = this.fb.array([this.createItem()]);

    this.registrationForm = this.fb.group({
      name: ['', Validators.required ],
      date: '',
      participants: this.participants
    });
  }

  addParticipant(): void {
    this.participants.push(this.createItem());
  }


  removeParticipant(index: number): void {
    this.participants.removeAt(index);
  }

  createItem(): FormGroup {
    return this.fb.group({
      firstname: '',
      lastname: '',
      email: ''
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }

}
