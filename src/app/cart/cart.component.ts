import { Component, OnInit } from '@angular/core';
import { CartServices } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  items;
  constructor(
    private cartServices: CartServices
  ) {};

  ngOnInit() {
    this.items = this.cartServices.getItems();
  }
}
