import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes, Result } from '../interfaces/Personajes.interface';

@Injectable({
  providedIn: 'root'
})
//Servicio Examen: Contiene las peticiones del proyecto.
export class ExamenService {

  //Clase para realizar peticiones
  //Para que funcione en el app.module debe existir HttpClientModule
  private http = inject(HttpClient);

  //Trae toda la data del endpoint character
  public getPersonajes():Observable<Personajes>{
    return this.http.get<Personajes>(`https://rickandmortyapi.com/api/character/`);
  }

  //Trae toda la data de character en base a un id
  public getPersonaje(id:string):Observable<Result>{
    return this.http.get<Result>(`https://rickandmortyapi.com/api/character/${id}`);
  }

  //Trae la data de Character en base a un URL ubicado en la info de la API
  public changePage(url : string):Observable<Personajes>{
    return this.http.get<Personajes>(url);
  }

}
