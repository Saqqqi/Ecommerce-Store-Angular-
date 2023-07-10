import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = cartService.cartItems;
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.total, 0);
    console.log(this.totalPrice)
  }
}
