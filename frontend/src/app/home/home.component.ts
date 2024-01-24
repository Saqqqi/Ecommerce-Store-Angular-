import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

import { Router } from '@angular/router';

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
  alertMessage: string = '';


  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.data;
      console.log('Fetched Products:', this.products); // Log the fetched products
      this.extractCategories();
    });
  }
  imageLoadError(event: any) {
    console.error('Image load error:', event);
    console.log('Image source:', event.target.src);
  }
  imageLoadSuccess(event: any) {
    console.log('Image load success:', event);
  }
  
  
  extractCategories(): void {
    this.categories = [...new Set(this.products.map(product => product.attributes.Brand))];
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

// HomeComponent
showProductDetails(product: any): void {
  // Log the clicked product before updating the service
  console.log('Clicked Product in HomeComponent:', product);

  // Update product details in the ProductService
  this.productService.storeClickedProduct(product);

  // Navigate to the product detail page with the product ID
  this.router.navigate(['/product-detail', product.id]);
}

  
  
  

  
}
