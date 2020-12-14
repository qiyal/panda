import { Component, OnInit } from '@angular/core';
import {Product} from '../objects/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bestProducts: Product[] = [
    // new Product(1, 'LG E200-1', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
    // new Product(2, 'LG E200-2', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
    // new Product(3, 'LG E200-3', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
    // new Product(4, 'LG E200-4', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
    // new Product(5, 'LG E200-5', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
    // new Product(6, 'LG E200-6', 'Pent T2330 / 1 / 120 / DVD-RW / X1250 / WiFi / BT / VistaHB / 12.1" / 2.05 kg', 69999),
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
