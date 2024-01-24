import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  formData: any = {}; 
  title: string = "";

  constructor(private fb: FormBuilder, private productService: ProductService ,private authService:AuthService ) {}

  ngOnInit(): void {
    this.formData = this.fb.group({
      title: ['', Validators.required],
      category: [''],
      tagline: [''],
      description: [''], 
      stockQuantity: [''],
      price: [''],
      applyDiscount: [false],
      discountedPrice: [''],
      discountPercentage: [''],
      // Add more form controls with validators as needed
    });
    this.formData.get('discountPercentage')?.valueChanges.subscribe(() => {
      this.calculateDiscountedPrice();
    });

    // Subscribe to changes in applyDiscount checkbox
    this.formData.get('applyDiscount')?.valueChanges.subscribe(() => {
      this.calculateDiscountedPrice();
    });
  }
  onSubmit() {
    const user = this.authService.getUser();
    console.log('User Data:', user);
  
    // Include user ID in the product data
    const productData = this.removeUndefinedProperties({
      Title: this.formData.get('title')?.value,
      Category: this.formData.get('category')?.value,
      TagLine: this.formData.get('tagline')?.value,
      Description: [{
        type: 'paragraph',
        children: [{
          type: 'text',
          text: this.formData.get('description')?.value,
        }],
      }],
      StockQuantity: this.formData.get('stockQuantity')?.value,
      Price: this.formData.get('price')?.value,
      OfferPrice: this.formData.get('discountedPrice')?.value,
      Discount: this.formData.get('discountPercentage')?.value,
      // Include the user ID in the product data
      owners: user,
      // Add other fields as needed
    });
  
    console.log('Product data before request:', productData);
  
    this.productService.saveProduct(productData).subscribe(
      (response: any) => {
        console.log('Product saved successfully:', response);
        // Now update the form controls with the received data
        this.formData.patchValue(response.data.attributes, { emitEvent: false });
      },
      (error: any) => {
        console.error('Error saving product:', error);
      }
    );
  }
  
  
  
  calculateDiscountedPrice(): void {
    console.log('Calculating discounted price...');
    const applyDiscount = this.formData.get('applyDiscount')?.value || false;

    if (applyDiscount) {
      const price = this.formData.get('price')?.value || 0;
      const discountPercentage = this.formData.get('discountPercentage')?.value || 0;

      const discountedPrice = price - (price * discountPercentage) / 100;
      this.formData.patchValue({ discountedPrice: discountedPrice }, { emitEvent: false });
    } else {
      const price = this.formData.get('price')?.value || 0;
      this.formData.patchValue({ discountedPrice: price }, { emitEvent: false });
    }
  }
  private removeUndefinedProperties(obj: any): any {
    // Helper function to remove undefined properties from the object
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
        result[key] = obj[key];
      }
    }
    return result;
  }
}
