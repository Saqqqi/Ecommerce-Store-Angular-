import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/seller.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sellers-dashboard',
  templateUrl: './sellers-dashboard.component.html',
  styleUrls: ['./sellers-dashboard.component.css']
})
export class SellersDashboardComponent implements OnInit {
  username: string = "";
  sellerProducts: any[] = []; // Declare sellerProducts here

  constructor(private sellerService: SellerService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadSellerProducts();
    this.loadUsername();
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

  loadUsername(): void {
    const user = this.authService.getUser();
    if (user && user.username) {
      this.username = user.username;
    }
  }
  
  
}
