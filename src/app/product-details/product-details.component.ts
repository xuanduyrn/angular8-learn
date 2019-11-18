import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) {};

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}