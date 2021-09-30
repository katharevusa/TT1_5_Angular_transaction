import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(baseUrl);
    }

    /*get(id: any): Observable<Product> {
      return this.http.get(`${baseUrl}/${id}`);
    }*/
}
