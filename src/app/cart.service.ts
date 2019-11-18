// Quản lý dữ liệu
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartServices {
  items = [];
  constructor(
    private http: HttpClient
  ) {};

  addToCart(product) {
    this.items.push(product);
  }
  
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items  = [];
    return this.items;
  }

  //phương thức để truy xuất dữ liệu vận chuyển
  getShippingPrices () {
    return this.http.get('/assets/shipping.json')
  }
}