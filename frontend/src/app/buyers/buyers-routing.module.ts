import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';
import { CompleteComponent } from './complete/complete.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment2', component: Payment2Component },
  { path: 'complete', component: CompleteComponent },
  { path: 'product-filter', component: ProductFiltersComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyersRoutingModule { }
