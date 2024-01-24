import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
addNewProduct() {
throw new Error('Method not implemented.');
}
  addToCart() {
    throw new Error('Method not implemented.');
  }
  cartCount: number = 0;

  constructor(private productService: ProductService, public authService: AuthService, private router: Router) { }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
// Check if the current route includes 'seller'
checkSellerRoute(): boolean {
  const isSeller = this.router.url.includes('/seller');
  if (isSeller) {
    // console.log('User is in the seller section.');
  } else {
    // console.log('User is in the buyer section.');
  }
  return isSeller;
}

  // ... (existing code)

  ngOnInit() {
    this.productService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
