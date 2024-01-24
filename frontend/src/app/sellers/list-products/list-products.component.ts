import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/seller.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  sellerProducts: any[] = [];

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.loadSellerProducts();
  }

  loadSellerProducts(): void {
    this.sellerService.getSellerProducts().subscribe(
      (sellerProducts) => {
        this.sellerProducts = sellerProducts;
        console.log('Seller\'s Products:', this.sellerProducts);
      },
      (error) => {
        console.error('Error fetching seller products:', error);
      }
    );
  }
}
