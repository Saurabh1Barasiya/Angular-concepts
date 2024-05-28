import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aboutPatchValue';

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

  partialUpdateProfile() {
    this.profileForm.patchValue({
      email: 'jane.doe@example.com',
      address: {
        street: '456 Oak St'
      }
    });
  }

  onSubmit(){
    
  }
}
