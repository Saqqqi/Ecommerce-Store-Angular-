import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxPaginationModule } from 'ngx-pagination'; // Import NgxPaginationModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // import FormsModule here
import { HttpClientModule } from '@angular/common/http';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { BuyersModule } from './buyers/buyers.module';
import { SellersModule } from './sellers/sellers.module';
import { ProductService } from './product.service';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,


  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgbModule,
      CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BuyersModule,
    SellersModule
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
