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

  constructor(private route: ActivatedRoute,
    private productService: ProductsService) {}
  
    ngOnInit(): void {
      const productId = Number(this.route.snapshot.params['productId']);
      this.productDetails = this.productService.getProductById(productId);
      this.imagesList = this.productService.getAllImageListByProductId(productId);
  }
}
