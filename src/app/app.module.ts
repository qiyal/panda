import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BestProductsComponent } from './home/best-products/best-products.component';
import { BestProductCardComponent } from './best-product-card/best-product-card.component';
import { TopSellsComponent } from './home/top-sells/top-sells.component';
import { TopSellCardComponent } from './top-sell-card/top-sell-card.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './adminmodule/admin.module';
import {UserAuthService} from './services/user-auth.service';
import {UserAuthGuard} from './shared/classes/user-auth.guard';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {CartService} from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './cart/order/order.component';
import {DoOrderGuard} from './shared/classes/do-order.guard';
import {DoOrderDeactiveGuard} from './shared/classes/do-order-deactive.guard';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BestProductsComponent,
    BestProductCardComponent,
    TopSellsComponent,
    TopSellCardComponent,
    RoutingDemoComponent,
    LoginComponent,
    ProfileComponent,
    CartComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    FormsModule
  ],
  providers: [
    UserAuthService,
    CartService,
    OrderService,
    UserAuthGuard,
    DoOrderGuard,
    DoOrderDeactiveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
