import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getAllProductList(): Observable<Products[]> {
    return this.http.get<Products[]>(this.URL);
  }

  getProductById(id: number): Observable<Products | undefined> {
    return this.http.get<Products>(`${this.URL}/${id}`);
  }

  getAllImageListByProductId(id: number): Observable<string[]> {
    return this.getProductById(id).pipe(
      map((product: Products | undefined) => product ? product.images : [])
    );
  }
}
