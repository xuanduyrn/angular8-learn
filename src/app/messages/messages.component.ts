import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})

export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  ngOnInit() {

  }
}
