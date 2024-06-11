import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Result } from '../../interfaces/Personajes.interface';
import { ExamenService } from '../../services/examen.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnDestroy, OnInit{
  
  //Inyectamos nuestro servicio para acceder a las peticiones
  private SvExamen = inject(ExamenService);

  //Delcaramos nuestras variables
  public data ?: Result[];  //Contiene nuestra data a mostrar
  public nextUrl!:string | null;  //Contendra la URL siguiente, obtenida de la peticion
  public prevUrl!:string | null; //Contendra la URL pasada, obtenida de la peticion
  private suscription ?: Subscription;  //Nos permitira cerrar la sucripcion despues

  //Metodo el cual ejecuta una peticion en base a un URL
  //Este cambia algunas de nuestras variables
  public changePage(url:string | null):void{
    if(!url){ return;}
    this.SvExamen.changePage(url).subscribe(
      res => {
        this.data = res.results;
        this.nextUrl=res.info.next;
        this.prevUrl=res.info.prev;})
  }

  //Variables nombre y edad las cuales nos serviran para recivir unos datos mas adelante
  public nombre ?: string;
  public edad ?: number;
  //Cuando el componente ejecute una emision de nombre guardare sus datos en nuestra variable nombre vista anteriormente
  public valoresNombre(name : string):void{
    this.nombre = name;
    //La guardamos en el LocalStorage
    localStorage.setItem('nombre',this.nombre);      
  }
  //Cuando el componente ejecute una emision de edad guardare sus datos en nuestra variable edad vista anteriormente
  public valorEdad(age : number):void{
    this.edad = age;
    //La guardamos en el LocalStorage
    localStorage.setItem('edad',this.edad.toString());
  }

  ngOnInit(): void {
    // Ejecutamos nuestra peticion la cual trae todos los personajes para despues guardar la data
    //Tambien guardamos las URL de nex page y prev page
    this.suscription = this.SvExamen.getPersonajes().subscribe(
      res=> {
      this.data = res.results;
      this.nextUrl=res.info.next;
      this.prevUrl=res.info.prev;})

      //Sentencias las cuales cargan datos del local storage si es que existe algo en el localStorage
      if(localStorage.getItem('nombre')){this.nombre = localStorage.getItem('nombre')!}
      if(localStorage.getItem('edad')){this.edad = parseInt(localStorage.getItem('edad')!)}
  }
  ngOnDestroy(): void {
    //Cerramos la suscripcion
    this.suscription?.unsubscribe();
  }
}
