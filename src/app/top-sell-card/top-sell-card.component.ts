import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../objects/product';

@Component({
  selector: 'app-top-sell-card',
  templateUrl: './top-sell-card.component.html',
  styleUrls: ['./top-sell-card.component.css']
})
export class TopSellCardComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
