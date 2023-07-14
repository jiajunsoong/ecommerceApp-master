import { Component, OnInit, inject } from '@angular/core';
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
export class ProductListComponent implements OnInit{
  productList: Products[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getAllProductList().subscribe((products) => {
      this.productList = products;
    },
    error => {
      console.log(error)
    });
  }
}
