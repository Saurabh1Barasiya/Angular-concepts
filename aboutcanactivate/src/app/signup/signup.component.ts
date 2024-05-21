import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  register(username: string, password: string): void {
    if (this.authService.register(username, password)) {
      this.router.navigate(['/login']);
    } else {
      alert('Username already exists');
    }
  }
}
