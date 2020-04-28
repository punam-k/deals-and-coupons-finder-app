import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CouponsComponent } from './coupons/coupons.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './service/auth.guard';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './home/product/product.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path : 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'item', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
