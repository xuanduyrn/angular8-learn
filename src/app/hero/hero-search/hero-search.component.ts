import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html'
})

export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) { };

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // chờ 300ms sau mỗi lần nhấn phím trước khi xem xét thuật ngữ
      debounceTime(300),
      // bỏ qua thuật ngữ mới nếu giống như thuật ngữ trước
      distinctUntilChanged(),
      // chuyển sang tìm kiếm mới có thể quan sát được mỗi khi thuật ngữ thay đổi
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
}