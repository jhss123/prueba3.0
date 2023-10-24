import { Component, OnInit } from '@angular/core';
//Paso 4.15:  importamos el MessageService
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Paso 4.16: Modificamos el constructor con un parámetro que declare una propiedad messageService
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
