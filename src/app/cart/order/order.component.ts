import { Component, OnInit } from '@angular/core';
import {Order} from '../../objects/order';
import {OrderService} from '../../services/order.service';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Order;
  validOrder: boolean;
  address: string;


  constructor(private orderService: OrderService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.address = '';
  }

  doOrder() {
    this.validOrder = (this.address !== undefined && this.address !== '');

    if (this.validOrder) {
      this.order = new Order('admin', this.cartService.getProductsInCart(), this.address);
      this.orderService.addOrder(this.order);
      this.cartService.clearCart();
      this.address = '';
      this.router.navigate(['/cart']);
    }
  }

}
