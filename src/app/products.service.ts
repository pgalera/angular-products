import { Injectable } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProduct[] {
    return [{
      id: 1,
      desc: 'Disco duro SSD 240GB',
      avail: new Date('2016-10-03'),
      price: 75,
      imageUrl: 'assets/ssd.jpg',
      rating: 5
    }, {
      id: 2,
      desc: 'Placa base LGA1151',
      avail: new Date('2016-09-15'),
      price: 96.95,
      imageUrl: 'assets/motherboard.jpg',
      rating: 4
    }]
  }
}
