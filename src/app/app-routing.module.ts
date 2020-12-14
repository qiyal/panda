import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import {BestProductsComponent} from './home/best-products/best-products.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {UserAuthGuard} from './shared/classes/user-auth.guard';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './cart/order/order.component';
import {DoOrderGuard} from './shared/classes/do-order.guard';
import {DoOrderDeactiveGuard} from './shared/classes/do-order-deactive.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: BestProductsComponent },
  { path: 'routing-demo', component: RoutingDemoComponent },
  {
    path: 'cart',
    component: CartComponent,
    canActivateChild: [DoOrderGuard],
    children: [
      { path: 'order', component: OrderComponent, canDeactivate: [DoOrderDeactiveGuard] }
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [UserAuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
