// sellers-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellersDashboardComponent } from './sellers-dashboard/sellers-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: SellersDashboardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellersRoutingModule { }
