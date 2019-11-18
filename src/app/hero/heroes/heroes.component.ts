import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-data/hero-data';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  hero = {
    id: 1,
    name: 'xuan duy'
  }
  selectedHero: Hero;
  heroes = HEROES;
  constructor() {

  }

  ngOnInit() {

  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}