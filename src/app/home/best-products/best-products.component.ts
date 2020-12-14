import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../objects/product';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {
  bestProducts: Product[] = [
    new Product(1, 'LG E200-1', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 89500, 95000),
    new Product(2, 'LG E200-2', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 70000, 80000),
    new Product(3, 'LG E200-3', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 60000, 65000),
    new Product(4, 'LG E200-4', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69500, 75000),
    new Product(5, 'LG E200-5', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 59500, 65000),
    new Product(6, 'LG E200-6', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 79500, 85000),
  ];

  count: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incre() {
    this.count++;
  }
}




