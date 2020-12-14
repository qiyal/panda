import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../objects/product';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-best-product-card',
  templateUrl: './best-product-card.component.html',
  styleUrls: ['./best-product-card.component.css']
})
export class BestProductCardComponent implements OnInit{
  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
