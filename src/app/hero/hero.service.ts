import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
  // Đăng nhập tin nhắn HeroService bằng MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  private heroesUrl = 'api/heroes';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // gửi lỗi đến cơ sở hạ tầng đăng nhập từ xa
      console.error(error); // đăng nhập vào giao diện điều khiển thay thế
      // công việc chuyển đổi lỗi tốt hơn cho người dùng
      this.log(`${operation} failed: ${error.message}`);
      // ứng dụng tiếp tục chạy bằng cách trả về một kết quả trống.
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    // C1: sử dụng of()chức năng RxJS để get All User
    // this.messageService.add('HeroService: fetched heroes id=${id}');
    // return of(HEROES); //of(HEROES)trả về một Observable<Hero[]>phát ra một giá trị duy nhất

    // C2: NHẬN user từ máy chủ
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetch heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    // C1 sử dụng of của rxjs
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of([].find(hero => hero.id === id));

    // C2 Get user bằng id. Sẽ 404 nếu không tìm thấy id
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetch hero id=${id}`),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      )
    )
  }

  // PUT: update user trên máy chủ
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }
  // Add: Thêm user vào máy chủ
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`add hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }
  // Remove: Xoá user
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }
}
