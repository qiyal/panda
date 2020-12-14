import { Component, OnInit } from '@angular/core';
import {Product} from '../../objects/product';

@Component({
  selector: 'app-top-sells',
  templateUrl: './top-sells.component.html',
  styleUrls: ['./top-sells.component.css']
})
export class TopSellsComponent implements OnInit {
  topSells: Product[] = [
    new Product(1, 'LG E200-1', 'AAA', 89500, 95000),
    new Product(2, 'LG E200-2', 'AAA', 70000, 80000),
    new Product(3, 'LG E200-3', 'AAA', 60000, 65000),
    new Product(4, 'LG E200-4', 'AAA', 69500, 75000),
    new Product(5, 'LG E200-5', 'AAA', 59500, 65000),
    new Product(6, 'LG E200-6', 'AAA', 79500, 85000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

