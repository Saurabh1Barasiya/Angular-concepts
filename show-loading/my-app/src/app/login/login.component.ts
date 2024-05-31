import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading = false;
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    this.loading = true;

    // Simulate an API call delay
    setTimeout(() => {
      this.loading = false;
      
      // Simple validation (for demonstration purposes only)
      if (this.email === 'user@example.com' && this.password === 'password') {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    }, 3000); // 2-second delay
  }

}
