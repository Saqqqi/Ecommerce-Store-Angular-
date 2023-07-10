import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3001/products';

  getCart(): any[] {
    return this.cart;
  }
  
  constructor(private http: HttpClient) { }
  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private cartSubject = new BehaviorSubject<any[]>(this.cart);
  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap((data: any) => console.log('Products:', data))
    );
  }
  cartCount$ = this.cartCount.asObservable();
  cart$ = this.cartSubject.asObservable();

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount.next(this.cartCount.getValue() + 1);
    this.cartSubject.next(this.cart);
    console.log('Cart contents:', this.cart);
  }
  // showProductDetail(product: any) {
  //   this.cart.push(product);
  //   this.cartCount.next(this.cartCount.getValue() + 1);
  //   this.cartSubject.next(this.cart);
  //   console.log('Cart contentsaaaaaaaaaaaaa:', this.cart);
  // }
}
