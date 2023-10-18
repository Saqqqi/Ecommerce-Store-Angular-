import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.autoLogin();
  }

  autoLogin() {
    // Implement your logic to automatically log in the user if they were previously logged in
    // For example, check if there's a token in localStorage and consider the user as logged in
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // ... other existing methods
}
