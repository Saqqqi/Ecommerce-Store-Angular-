import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | undefined;
  productDetails: any;
  quantity: number = 1;
  loggedInUser: any;
  productInCart: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService 
  ) {}

  addToCart(productDetails: any): void {
    // Get the currently logged-in user
    const user = this.authService.getUser();
  
    // Check if the user is logged in
    if (user && user.id) {
      // Assuming you have a method in ProductService to add to the cart
      const cartItem = {
        productDetails: productDetails,
        quantity: this.quantity,
        total: this.calculateTotalPrice(),
        discountedTotal: this.calculateDiscountedPrice()
      };
  
      // Log product ID, logged-in user details, and cart item details
      console.log('Product ID:', this.productId);
      console.log('Cart Item Details:', cartItem);
  
      // Call the addToCart method in ProductService
      this.productService.addToCart(cartItem);
    } else {
      console.error('User not logged in. Cannot add to cart.');
      // Handle the situation where the user is not logged in, e.g., redirect to the login page
      // this.router.navigate(['/login']);
    }
    this.productInCart = true;
  }
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productDetails = this.productService.getStoredProductDetails();
      this.loggedInUser = this.authService.getUser();
  
      // Log product ID, logged-in user details, and initial cart item details
      console.log('Product ID:', this.productId);
      console.log('Initial Cart Item Details:',this.productDetails);
    });
  }
  isQuantityLimitReached(): boolean {
    return this.quantity >= (this.productDetails.attributes?.Quantity || 0);
  }
  increaseQuantity(): void {
    this.quantity++;
    this.updateTotalPrice();
    this.cdr.detectChanges(); 
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
      this.cdr.detectChanges();
    }
  }

  updateTotalPrice(): void {
    this.cdr.detectChanges();
  }

  calculateTotalPrice(): number {
    return (this.productDetails.attributes?.Price || 0) * this.quantity;
  }

  calculateDiscountedPrice(): number {
    const discount = this.productDetails.attributes?.Discount || 0;
    const discountedPrice = (this.productDetails.attributes?.Price || 0) * (1 - discount / 100);
    return discountedPrice * this.quantity;
  }
}
