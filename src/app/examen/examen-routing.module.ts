import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';

const routes: Routes = [
  //Declaramos nuestras Rutas Hijas
  {
    path:'',
    children:[
      {path:'personajes', component:PersonajesComponent},
      //Esta ruta funciona dependiendo a un id, esto nos sirve ya que podremos acceder por medio de la ruta a este ID
      {path:'personaje/:id', component:PersonajeComponent},
      //Cualquier cosa que no este en las rutas manda directo a personajes
      {path:'**', redirectTo:'personajes'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenRoutingModule { }
