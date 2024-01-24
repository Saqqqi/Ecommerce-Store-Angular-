import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  fetchProductDetails(productId: number | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  private apiUrl = 'http://localhost:1337/api/products?populate=*';

  getCart(): any[] {
    return this.cart;
  }

  // ProductService
  private productDetailsSubject = new BehaviorSubject<any>(null);
  productDetails$ = this.productDetailsSubject.asObservable();
  storeClickedProduct(product: any): void {
    console.log('Stored Clicked Product in ProductService:', product);
    localStorage.setItem('productDetails', JSON.stringify(product));
    this.productDetailsSubject.next(product);
  }

  getStoredProductDetails(): any {
    const storedProduct = localStorage.getItem('productDetails');
    return storedProduct ? JSON.parse(storedProduct) : null;
  }




  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '?populate=*');
  }


  
  saveProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, { data: productData });
  }

  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartSubject = new BehaviorSubject<any[]>(this.cart);



  cartCount$ = this.cartCount.asObservable();
  cart$ = this.cartSubject.asObservable();
  addToCart(cartItem: any): void {
    // Assuming you have a Strapi API endpoint for adding to the cart
    const apiUrl = 'http://localhost:1337/api/carts?populate=*';
  
    // Get the currently logged-in user
    const user = this.authService.getUser();
    console.log("hello" ,user)
  
    // Ensure the user is available
    if (user && user.id) {
      // Structure the request payload with the "data" field
      const cartData = {
        data: {
          Quantity: cartItem.quantity,
          Total_Price: cartItem.total,
          Discount_Price: cartItem.discountedTotal,
          products: [
            {
              // Include the necessary product details
              id: cartItem.productDetails.id,
              attributes: {
                Title: cartItem.productDetails.attributes.Title,
                // Add other attributes as needed
              }
            }
          ],
          // Include owner information
          owner: user.id, // Assuming 'id' is the user ID field in your Strapi model
          // Include other relevant data
        }
      };
  
      // Log data before saving to Strapi
      console.log('Data before saving to Strapi:', cartData);
  
      // Make the HTTP request to Strapi
      this.http.post(apiUrl, cartData).subscribe(
        (response: any) => {
          console.log('Added to cart successfully:', response);
        },
        (error: any) => {
          console.error('Error adding to cart:', error);
  
          // Log detailed error information
          if (error && error.error && error.error.error) {
            console.error('Strapi Error Details:', error.error.error);
          }
        }
      );
    } else {
      console.error('User not logged in. Cannot add to cart.');
    }
  }
}  
  
  // showProductDetail(product: any) {
  //   this.cart.push(product);
  //   this.cartCount.next(this.cartCount.getValue() + 1);
  //   this.cartSubject.next(this.cart);
  //   console.log('Cart contentsaaaaaaaaaaaaa:', this.cart);
  // }
