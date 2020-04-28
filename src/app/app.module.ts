import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CouponsComponent } from './coupons/coupons.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { OrderComponent } from './order/order.component';
import { ProductService } from './service/product.service';
import { ProductComponent } from './home/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CouponsComponent,
    NewsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserEditComponent,
    CartComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,AuthGuard,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
