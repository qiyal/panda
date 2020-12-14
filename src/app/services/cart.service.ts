import { Injectable } from '@angular/core';
import {Product} from '../objects/product';

@Injectable()
export class CartService {
  cardArray: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cardArray.push(product);
  }

  getProductsInCart(): Product[] {
    return this.cardArray;
  }

  clearCart() {
    this.cardArray = [];
  }
}
