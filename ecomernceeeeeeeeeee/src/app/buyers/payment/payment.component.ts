import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/payment.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  cardDetailsForm: FormGroup | undefined;
item: any;

  constructor(private router: Router, private paymentService: PaymentService) { 
    // Get the cartItems from the shared service
    this.cartItems = this.paymentService.cartItems;
    console.log(this.cartItems)
  }

  ngOnInit() {
    // Call the calculateTotalPrice() method to calculate the total price
    this.paymentService.calculateTotalPrice();
    this.totalPrice = this.paymentService.totalPrice;
    console.log("Total Price Cart Items" , this.totalPrice)
  }
  

  processToPay() {
    this.router.navigate(['/']);
    console.log("art Items :", this.cartItems);
  }

}
  






