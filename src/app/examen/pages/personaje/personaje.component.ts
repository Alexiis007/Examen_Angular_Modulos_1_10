import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Result } from '../../interfaces/Personajes.interface';
import { ExamenService } from '../../services/examen.service';
import { Subscription, switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit, OnDestroy{

  //Inyectamos el servicio para acceder a sus metodos y activeRoute para acceder a sus parametros
  private SvExamen = inject(ExamenService);
  private activeRoute = inject(ActivatedRoute);

  //Declaramos nuestra variables que utilizaremos en el codigo
  public data ?: Result;
  public id !: string;
  //Esta variable recive un dato de tipo Suscription por lo cual accedemos a sus atributos como suscripcion
  private suscripcion !: Subscription;

  ngOnInit(): void {
    //Sascamos el parametro de la ruta por medio de activeRoute
    //A su vez le pasamos esta peticion a la variable susccription
    this.suscripcion = this.activeRoute.params 
    .pipe( 
      //extraemos la data de los parametros y ejecutamos una peticion en base a ese parametro
      switchMap(({id})=>this.SvExamen.getPersonaje(id)), 
    ) 
    //Recivimos la data de esa peticion y la metemos en data
    .subscribe(res => {this.data = res})
  }
  ngOnDestroy(): void {
    //Cerramos la peticion por medio de suscription y unsubscribe()
    this.suscripcion?.unsubscribe();
  }
}
