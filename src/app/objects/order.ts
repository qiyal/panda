import {Product} from './product';

export class Order {
  constructor(
    public customer: string,
    public items: Product[],
    public address: string,
  ) {}
}
