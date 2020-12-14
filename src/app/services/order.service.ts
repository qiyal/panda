import { Injectable } from '@angular/core';
import {Order} from '../objects/order';

@Injectable()
export class OrderService {
  orders: Order[] = [];
  constructor() { }

  getOrderByLogin(customer: string): Order[] {
    let userOrders: Order[] = [];

    for (let order of this.orders) {
      if (order.customer === customer) {
        userOrders.push(order);
      }
    }

    return userOrders;
  }

  addOrder(newOrder: Order) {
    this.orders.push(newOrder);
  }
}
