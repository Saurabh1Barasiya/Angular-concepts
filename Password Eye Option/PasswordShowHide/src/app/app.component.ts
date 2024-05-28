import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordShowHide';

  userForm: FormGroup;
  passwordFieldType: string = 'password';

  constructor() {
    this.userForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
