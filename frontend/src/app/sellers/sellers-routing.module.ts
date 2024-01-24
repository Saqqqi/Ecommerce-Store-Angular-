// sellers-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellersDashboardComponent } from './sellers-dashboard/sellers-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'dashboard', component: SellersDashboardComponent },
  { path: 'product-form', component: ProductFormComponent }, // Corrected path casing
  { path: 'edit-product', component: EditProductComponent }, // Corrected path casing
  { path: 'product-list', component: ListProductsComponent }, // Corrected path casing
  { path: 'product-detail', component: ProductDetailsComponent }, // Corrected path casing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
