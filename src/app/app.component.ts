import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  pathName = "";

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.pathName = this.router.url;
  }
}
