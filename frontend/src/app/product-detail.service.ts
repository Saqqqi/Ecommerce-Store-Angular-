import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private productDetailsSubject = new BehaviorSubject<any>(null);
  productDetails$: Observable<any> = this.productDetailsSubject.asObservable();
  baseUrl: string = 'http://your-api-base-url.com';

  constructor(private http: HttpClient) {}

  updateProductDetails(product: any): void {
    this.productDetailsSubject.next(product);
  }

  getProductById(productId: number) {
    return this.http.get(`${this.baseUrl}/products/${productId}`);
  }
}
