import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  private users: User[] = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  private loggedInUser: User | null = null;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }


  logout(): void {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }


  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }


  register(username: string, password: string): boolean {
    if (this.users.find(u => u.username === username)) {
      return false; // Username already exists
    }
    this.users.push({ username, password });
    return true;
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

}
