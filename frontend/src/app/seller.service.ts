import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private productService: ProductService, private authService: AuthService) {}

  getSellerProducts() {
    return this.productService.getProducts().pipe(
      map((response: { data: never[]; }) => {
        const products = response?.data || [];
        if (Array.isArray(products)) {
          const loggedInUser = this.authService.getUser();
          return products.filter((product: any) => this.isProductOwner(product, loggedInUser));
        } else {
          console.error('Products is not an array:', products);
          return [];
        }
      })
    );
  }

  private isProductOwner(product: any, user: any): boolean {
    return user && product.attributes.owners?.data?.id === user.id;
  }
}
