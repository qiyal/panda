import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {Product} from '../objects/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProductInCart();
  }

  getProductInCart() {
    this.products = this.cartService.getProductsInCart();
  }

}
