import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersDashboardComponent } from './sellers-dashboard/sellers-dashboard.component';
import { SellersRoutingModule } from './sellers-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    SellersDashboardComponent,
    ProductFormComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     // Add this line
  ]
})
export class SellersModule { }
