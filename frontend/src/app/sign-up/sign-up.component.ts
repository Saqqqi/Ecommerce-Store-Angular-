import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private http: HttpClient) {}

  signUp(name: string, email: string, password: string) {
    console.log('Sending sign up request with data:', { name, email, password });
  
    const userData = { name, email, password };
    this.http.post('http://localhost:3001/signup', userData)
      .subscribe((response: any) => {
        console.log('User signed up successfully:', response);
      });
  }
  
}
