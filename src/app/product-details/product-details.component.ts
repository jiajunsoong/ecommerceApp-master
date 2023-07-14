import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productDetails: Products | undefined;
  imagesList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.params['productId']);
    this.productService.getProductById(productId).subscribe(async (product) => {
      this.productDetails = product;
      const images = await this.productService.getAllImageListByProductId(productId).toPromise();
      this.imagesList = images || [];
    },
    error => {
      console.log(error)
    });
  }

}
