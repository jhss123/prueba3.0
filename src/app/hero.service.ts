import { Injectable } from '@angular/core';
//Paso 4.9:  importamos los símbolos Observable y of de RxJS.
import { Observable, of } from 'rxjs';
//Paso 4.2: Importamos Hero and HEROES.
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//Paso 4.12: importamos el MessageService.
import { MessageService } from './message.service';
// Paso 4.1: el símbolo Inyectable de Angular se importa en el archivo generado, anotando la clase como decorador @Injectable()
//El decorador @Injectable() acepta el objeto de metadatos de un servicio de la misma manera que el decorador @Component() para las clases de componentes.
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //Paso 4.13: Modificamos el constructor con un parámetro que declare una propiedad privada messageService
  constructor(private messageService: MessageService) { }
//Paso 4.3: Agregamos el método getHeroes y devuelva los héroes simulados.
//Paso 4.10: Reemplazamos el método getHeroes() con lo siguiente:
//Paso 4.14: Modificamos el método getHeroes() para enviar un mensaje cuando se busquen los héroes.
getHeroes(): Observable<Hero[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('Servicio de heroes: Heroe Buscados');
  return of(HEROES);
}

//Paso 5.19: agrega el siguiente método getHero() con el id después del método getHeroes():
getHero(id: number): Observable<Hero | undefined>  {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`Servicio de heroe: Heroe buscado con el id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
}