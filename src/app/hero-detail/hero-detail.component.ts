// Paso 3.3: importación @angular/core para incluir el símbolo Input.
import { Component, OnInit, Input } from '@angular/core';
// Paso 3.2: importamos el símbolo Hero.
import { Hero } from '../hero';

//Paso 5.17: Agrega las siguientes importaciones:
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  //Paso 3.4: Agrega la propiedad hero antepuesta por el decorador @Input().
  @Input() hero?: Hero; 

  //Paso 5.18: Inyecta los servicios ActivatedRoute, HeroService y Location en el constructor, guardando sus valores en campos privados:
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  //Paso 5.19: En el ngOnInit() método del ciclo de vida llama a getHero() y defínelo de la siguiente manera.
  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    // TODO: fix the error ceased by ts-ignore
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  //Paso 5.21: Agregamos un método goBack() a la clase de componente que navega hacia atrás un paso en la pila de historial del navegador usando el servicio Location que inyectaste previamente.
  goBack(): void {
    this.location.back();
  }
}
