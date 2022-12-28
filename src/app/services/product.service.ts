import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(search: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>("https://fakestoreapi.com/products").pipe(
      map(products => products.filter(product => product.title.startsWith(search)))
    );
  }

  getAllByLimit(limit: number): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products?limit=${limit}`);
  }
}
