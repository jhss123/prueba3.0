import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//Paso 4.12: El servicio expone su caché de mensajes y dos métodos: uno para agregar() un mensaje al caché y otro para borrar() el caché.
export class MessageService {
  messages: string[] = [];

  // Método "add" para agregar mensajes al caché.
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
