import { Component, OnInit } from '@angular/core';
import { CartServices } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})

export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(
    private cartServices: CartServices
  ) {};

  ngOnInit() {
    this.shippingCosts = this.cartServices.getShippingPrices();
  }
}