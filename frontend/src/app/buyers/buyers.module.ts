import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersRoutingModule } from './buyers-routing.module';
import { CartComponent } from './cart/cart.component';
import { CompleteComponent } from './complete/complete.component';
import { PaymentComponent } from './payment/payment.component';
import { Payment2Component } from './payment2/payment2.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [
    CartComponent,
    CompleteComponent,
    PaymentComponent,
    Payment2Component,
    ProductFiltersComponent,
    ProductDetailComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    CommonModule,
    BuyersRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BuyersModule { }
