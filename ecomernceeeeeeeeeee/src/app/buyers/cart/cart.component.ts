import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { PaymentService } from 'src/app/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(public cartService: CartService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.calculateTotalPrice();
    console.log('Cart Items:', this.cartItems);

    this.paymentService.cartItems = this.cartItems;
  }

  deleteFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      const itemPrice = item.total;
      this.cartItems.splice(index, 1);
      console.log('Item removed from cart:', item);
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }
}
