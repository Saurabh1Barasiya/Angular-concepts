import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aboutSetValue';

  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zip: new FormControl('')
      })
    });
  }


  updateProfile() {
    this.profileForm.setValue({
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
      }
    });
  }

  onSubmit(){
    console.log("form submitted...");
  }

}
