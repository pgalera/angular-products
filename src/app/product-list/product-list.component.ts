import { Component, OnInit } from '@angular/core';
import { IProduct } from 'interfaces/i-product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "Mi lista de productos"
  headers = {image: 'Imagen', desc: 'Producto', price: 'Precio', avail: 'Disponible', rate: 'Puntuación'};
  showImage = true;
  filterSearch: string = '';

  products: IProduct[] = [];


  toggleImage() {
    this.showImage = !this.showImage;
  }

  constructor(private producsService: ProductsService) { }

  ngOnInit() {
    this.products = this.producsService.getProducts();
  }

}
