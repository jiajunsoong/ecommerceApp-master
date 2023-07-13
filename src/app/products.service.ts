import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: Products[] = [
    {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg"]
  },{
    id:2,
    title:'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price:899,
    discountPercentage:17.94,
    rating:4.44,
    stock:34,
    brand:'Apple',
    category:'smartphones',
    thumbnail:'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: ["https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg"]
  }];
  
  constructor() { }

  getAllProductList(): Products[]{
    return this.productList
  }

  getAllImageListByProductId(id: number): string[] {
    const product = this.getProductById(id);
    
    if (product) {
      return product.images;
    }
    
    return [];
  }
  
  

  getProductById(id: number): Products| undefined{
    return this.productList.find(product => product.id === id);
  }
}
