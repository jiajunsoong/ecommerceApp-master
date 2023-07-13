import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent {
  @Input() product!: Products;
}
