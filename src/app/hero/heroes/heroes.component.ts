import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  hero = {
    id: 1,
    name: 'xuan duy'
  }
  constructor() {

  }

  ngOnInit() {

  }
}