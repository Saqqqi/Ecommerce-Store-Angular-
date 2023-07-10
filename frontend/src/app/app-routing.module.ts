import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Payment2Component } from './payment2/payment2.component';
import{CompleteComponent} from './complete/complete.component'
import { ProductFiltersComponent } from './product-filters/product-filters.component';

const routes: Routes = [
  {path:'' ,component: HomeComponent },
  {path:'cart' ,component: CartComponent },

  { path: 'payment', component: PaymentComponent },


  { path: 'payment2', component: Payment2Component },

  { path: 'complete', component: CompleteComponent },


  { path : 'product-filter' , component: ProductFiltersComponent},

  // { path: '**', redirectTo: '/' },


  { path: 'product-detail/:id', component: ProductDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
