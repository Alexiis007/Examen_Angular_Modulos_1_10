import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    //Exportamos el componente para ser usado en los demas modulos
    FormularioComponent
  ]
})
export class SharedModule { }
