import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Declaramos nuestras rutas padre
  {
    path:'examen',
    //cargamos sus hijas por medio de lazyLoad
    loadChildren:()=>import('./examen/examen.module').then(m => m.ExamenModule)
  },
  //La ruta que iniciara primero sera examen, despues esta cargara sus hijas
  {
    path:'',
    redirectTo:'examen',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
