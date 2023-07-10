import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
