import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // onSignup() {
  //   // Sign up logic here
  //   console.log('Sign up form submitted');
  // }


  username = '';
  email = '';
  password = '';

  onSignup() {
    // Sign up logic here
    console.log('Sign up form submitted');
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // You can add navigation to login or other logic here
  }
}
