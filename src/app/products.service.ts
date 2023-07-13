import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  URL = 'http://localhost:3000/products'

  constructor() { }

  async getAllProductList(): Promise<Products[]>{
    const data = await fetch(this.URL);
    return await data.json();
  }

  async getProductById(id: number): Promise<Products| undefined>{
    const data = await fetch(`${this.URL}/${id}`);
    return await data.json();
  }

  async getAllImageListByProductId(id: number): Promise<string[]> {
    const product = await this.getProductById(id);
  
    if (product) {
      return product.images;
    }
  
    return [];
  }
  
}
