import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { Result } from '../../interfaces/Personajes.interface';

@Component({
  selector: 'examen-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
//Implementamos AfterViewInit para ejecutar algo despues de la carga del HTML
export class TarjetaComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    //Cambia el color de el boton en el HTML si la data recivida es Female
    if(this.data?.gender == 'Female'){
      this.Boton.nativeElement.style.backgroundColor = 'pink';
      this.Boton.nativeElement.style.color = 'black';
    }
    //Cambia el color de el boton en el HTML si la data recivida es Male
    if(this.data?.gender == 'Male'){
      this.Boton.nativeElement.style.backgroundColor = 'blue';
      this.Boton.nativeElement.style.color = 'white';
    }
  }

  //Recivimos la data de un padre por medio de un Page
  @Input()
  data?:Result;
  //Recivimos la flag de un padre para saber si se quiere o no mostrar un boton
  //dependiendo de el valor bool
  @Input()
  flagVerMas:boolean=true;

  //Ponemos en nuestro poder los elemento HTML que contengan la Tag boton
  //la variable Boton la recive
  @ViewChild('boton')
  public Boton !: ElementRef<HTMLInputElement>;
  
}
