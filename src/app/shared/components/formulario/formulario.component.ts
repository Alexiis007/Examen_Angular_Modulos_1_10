import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //Variables receptoras de ngModel en el HTML
  public nombre ?: string;
  public edad ?: number;

  //Variable nombre de tipo emitter
  @Output()
  public emitNombre : EventEmitter<string> = new EventEmitter();
  
  //Variable nombre de tipo emitter
  @Output()
  public emitEdad : EventEmitter<number> = new EventEmitter();

  //Funcion emisora de las variables emitter, con data en base a las variables recividas en el ngModel
  public guardar():void{
    this.emitEdad.emit(this.edad)
    this.emitNombre.emit(this.nombre);
  }
}
