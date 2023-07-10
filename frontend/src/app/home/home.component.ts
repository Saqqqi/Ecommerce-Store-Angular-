import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { ProductDetailService } from '../product-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: string[] = [];
  selectedCategory: string = '';
  products: any[] = [];
  p: number = 1;
  cart: any[] = [];
  cartCount = 0;
  alertMessage: string = '';

  constructor(
    private productService: ProductService,
    private productDetailService: ProductDetailService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.extractCategories();
    });
  }

  extractCategories() {
    this.categories = Array.from(new Set(this.products.map(product => product.category)));
  }

  filterProductsByCategory(category: string) {
    this.selectedCategory = category;
  }

  getDisplayedProducts(): any[] {
    if (this.selectedCategory) {
      return this.products.filter(product => product.category === this.selectedCategory);
    } else {
      return this.products;
    }
  }

  showProductDetails(product: any): void {
    this.productDetailService.updateProductDetails(product);
  }

  addToCart(product: any) {
    if (product.available > 1) {
      // add product to cart
      this.productService.addToCart(product);
      this.cartService.addToCart(product);
      // decrease available count by 1
      product.available--;
    } else if (product.available === 1) {
      // add product to cart
      this.productService.addToCart(product);
      this.cartService.addToCart(product);
      // decrease available count by 1
      product.available--;
      // set alert message for this product only
      this.alertMessage = `The ${product.name} is the last item in stock.`;
    } else {
      // reset alert message if the product is already sold out
      this.alertMessage = '';
    }
    // check if all products are sold out
    const soldOutProducts = this.products.filter(p => p.available === 0);
    if (soldOutProducts.length === this.products.length) {
      this.alertMessage = 'All products are sold out!';
    }
  }
}
