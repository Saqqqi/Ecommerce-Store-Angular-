// cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartData();
  }

  loadCartData(): void {
    // Fetch cart data from the service
    this.cartService.getCart().subscribe(
      (cartData: any) => {
        // Assuming the cart data structure matches the example
        this.cartItems = cartData?.data || [];
        console.log('cartItems:', this.cartItems);

      },
      (error: any) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }
}
