import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeComponent,
    TarjetaComponent,
  ],
  imports: [
    CommonModule,
    ExamenRoutingModule,
    //Importamos para utilizar ngModel
    FormsModule,
    //Importamos para poder utilizar routerLink
    RouterModule,
    //Importamos para poder utilizar sus elementos exportados
    SharedModule,
  ]
})
export class ExamenModule { }
