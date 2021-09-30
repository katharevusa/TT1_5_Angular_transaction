import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})

export class CartService {

    constructor(private http: HttpClient) { }

    //need to get from orderItem table all items with the orderId
    getAll(orderId: number): Observable<Product[]> {
      return this.http.get<CartItem[]>(baseUrl);
    }

    //remove from orderItem table the entry with this order_id and product_id
    remove(orderId: number, productId: number):Observable<any> {
      return this.http.post(baseUrl, orderId, productId);
    }

    /*get(id: any): Observable<Product> {
      return this.http.get(`${baseUrl}/${id}`);
    }*/
}
