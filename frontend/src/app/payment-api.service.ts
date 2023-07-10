import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {
  apiUrl = 'http://localhost:4200/payment';

  constructor(private http: HttpClient) { }

  savePayment(paymentData: any) {
    console.log('Payment data:', paymentData); // Add this line
    return this.http.post(this.apiUrl, paymentData);
  }
  
}

