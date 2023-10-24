import { NgModule } from '@angular/core';
//Paso 5.1: Primero, AppRoutingModule importa RouterModule y Routes para que la aplicación pueda tener funcionalidad de enrutamiento
import { RouterModule, Routes } from '@angular/router';
//Paso 5.2: Importamos HeroesComponent, le dará al enrutador un lugar adonde ir una vez que configure las rutas.
import { HeroesComponent } from './heroes/heroes.component'; 
//Paso 5.10: Importamos el DashboardComponent en el AppRoutingModule.
import { DashboardComponent } from './dashboard/dashboard.component';
//Paso 5.13:importamos HeroDetailComponent.
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Paso 5.3:  Las Rutas le indican al enrutador qué vista mostrar cuando un usuario hace clic en un enlace o pega una URL
//Una Ruta típica de Angular tiene dos propiedades:
//path: una cadena que coincide con la URL en la barra de direcciones del navegador. component: el componente que el enrutador debe crear al navegar a esta ruta.
const routes: Routes = [
  //Paso 5.15: En este punto, todas las rutas de aplicación están en su lugar.
  { path: 'heroes', component: HeroesComponent },
  //Paso 5.11: Agregamos una ruta al arreglo AppRoutingModule.routes que coincida con una ruta al DashboardComponent.
  { path: 'dashboard', component: DashboardComponent },
  //Paso 5.12: Para que la aplicación navegue al dashboard automáticamente, agrega la siguiente ruta al arreglo rutas.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Paso 5.14: agregamos una ruta parametrizada al arreglo de rutas que coincida con el patrón de ruta de la vista detalle del héroe.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //Paso 5.4: La siguiente línea agrega el RouterModule al arreglo AppRoutingModule de importartaciones y lo configura con las rutas en un solo paso llamando RouterModule.forRoot():
  imports: [RouterModule.forRoot(routes)],
  //Paso 5.5: AppRoutingModule exporta el RouterModule para que esté disponible en toda la aplicación.
  exports: [RouterModule]
})
export class AppRoutingModule { }