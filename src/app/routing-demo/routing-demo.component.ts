import { Component, OnInit } from '@angular/core';
import {Product} from '../objects/product';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: [ './routing-demo.component.css' ]
})
export class RoutingDemoComponent implements OnInit {
  product: Product[] = [];

  ngOnInit() {
  }

}
