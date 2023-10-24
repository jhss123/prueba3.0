import { Component } from '@angular/core';
import { Hero } from '../hero';
//Paso 4.3  : Importamos el HeroService en su lugar.
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  //Paso 4.5: Reemplazamos la definición de la propiedad heroes con una simple declaración.
  heroe!: Hero[];
//Paso 4.6: Agregamos un parámetro privado heroService de tipo HeroService al constructor
constructor(private heroService: HeroService) { }
  ngOnInit() {
    //Paso 4.8: llamamos a getHeroes() dentro del ngOnInit lifecycle hook 
    this.getHeroes();
  }
  //Paso 4.7: Creamos un método para recuperar a los héroes del servicio
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroe = heroes);
  }
}
