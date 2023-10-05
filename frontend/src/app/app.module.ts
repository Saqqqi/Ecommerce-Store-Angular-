import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination'; // Import NgxPaginationModule
import { FormsModule } from '@angular/forms'; // import FormsModule here
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Payment2Component } from './payment2/payment2.component';
import { CompleteComponent } from './complete/complete.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CartComponent,
    PaymentComponent,
    LoaderComponent,
    ProductDetailComponent,
    Payment2Component,
    CompleteComponent,
    ProductFiltersComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule // Add NgxPaginationModule to imports array
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
