// cart.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:1337/api'; // Adjust as needed

  constructor(private http: HttpClient, private authService: AuthService) { }

  getCart(): Observable<any> {
    const user = this.authService.getUser();
    const userId = user && user.id ? user.id : null;
    console.log("hello",user)

    // Log user information
    console.log('User ID:', userId);

    if (userId) {
      // Use the user ID to fetch the cart data
      const url = `${this.apiUrl}/products?populate=*&filters[owners]=${userId}`;

      return this.http.get<any>(url);
    } else {
      console.error('User not logged in. Cannot fetch cart.');
      // Return an observable with an empty array or handle the error accordingly
      return new Observable<any>(observer => observer.next([]));
    }
  }
}
