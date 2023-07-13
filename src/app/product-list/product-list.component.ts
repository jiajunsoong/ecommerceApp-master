import { Component, inject } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    
})
export class ProductListComponent {
  productList: Products[] = [
  //   {
  //   id: 1,
  //   title: 'iPhone 9',
  //   description: 'An apple mobile which is nothing like apple',
  //   price: 549,
  //   discountPercentage: 12.96,
  //   rating: 4.69,
  //   stock: 94,
  //   brand: 'Apple',
  //   category: 'smartphones',
  //   thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  // },{
  //   id:2,
  //   title:'iPhone X',
  //   description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  //   price:899,
  //   discountPercentage:17.94,
  //   rating:4.44,
  //   stock:34,
  //   brand:'Apple',
  //   category:'smartphones',
  //   thumbnail:'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
  // }
];

  prodcutService: ProductsService=inject(ProductsService);
products: any;

  constructor() { 
    this.productList=this.prodcutService.getAllProductList();
  }
}
