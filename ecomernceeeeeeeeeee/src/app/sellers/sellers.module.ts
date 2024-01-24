import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersDashboardComponent } from './sellers-dashboard/sellers-dashboard.component';
import { SellersRoutingModule } from './sellers-routing.module';



@NgModule({
  declarations: [
    SellersDashboardComponent
  ],
  imports: [
    CommonModule,
    SellersRoutingModule
  ]
})
export class SellersModule { }
