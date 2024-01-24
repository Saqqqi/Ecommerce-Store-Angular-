import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.gmailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Custom validator for Gmail
  gmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email: string = control.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !emailPattern.test(email) ? { 'invalidEmail': true } : null;
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Use async/await for cleaner asynchronous code
      try {
        const result = await this.authService.login(email, password);
        console.log('Login result:', result);
        result ? this.router.navigate(['/home']) : (this.loginError = 'Invalid email or password');
      } catch (error) {
        console.error('Unexpected error during login:', error);
      }
    }
  }
}
