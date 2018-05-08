import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "Mi lista de productos"
  headers = {image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible'};
  showImage = true;
  filterSearch: string = '';

  products: IProduct[] = [{
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
  }, {
    id: 3,
    desc: 'Memoria DDR3 1600 8GB',
    avail: new Date('2017-03-04'),
    price: 85.95,
    imageUrl: 'assets/ram.jpg',
    rating: 3
  }, {
    id: 4,
    desc: 'Disco duro mecánico 1TB',
    avail: new Date('2015-12-11'),
    price: 49.50,
    imageUrl: 'assets/hdd.jpg',
    rating: 2
  }];


  toggleImage() {
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit() {
    console.log("ProductListComponent has been initialized!");
  }

}
