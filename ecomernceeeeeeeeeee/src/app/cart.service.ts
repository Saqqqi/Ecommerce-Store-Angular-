import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor() { }

  addToCart(item: any) {
    // Check if the item already exists in the cart
    const existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      // If it exists, increment the quantity and update the total
      existingItem.quantity += 1;
      existingItem.total = existingItem.newPrice * existingItem.quantity; // use newPrice instead of price
      
     // use newPrice instead of price
    } else {
      // If it doesn't exist, add it to the cart with a quantity of 1 and a total equal to the item price
      const newItem = { ...item, quantity: 1, total: item.newPrice }; // use newPrice instead of price
      this.cartItems.push(newItem);
    }
    // Update the total price of all items in the cart
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.total, 0);

 
  }
  
  deleteFromCart(item: any) {
    console.log('deleteFromCart called');
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      const itemPrice = item.total;
      this.cartItems.splice(index, 1);
      console.log('Item removed from cart:', item);
      this.calculateTotalPrice();
    }
  }
  
  
  
  
  calculateTotalPrice() {
    console.log('calculateTotalPrice called');
    this.totalPrice = this.cartItems.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    console.log("Updated total price:", this.totalPrice);
}

  
}
