import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartServices } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartServices: CartServices,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartServices.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  };
  
  ngOnInit() {
    this.items = this.cartServices.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartServices.clearCart();
    this.checkoutForm.reset();
  }
}
